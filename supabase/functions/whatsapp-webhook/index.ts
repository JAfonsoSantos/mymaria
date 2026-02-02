import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type WhatsAppMessage = {
  from?: string;
  id?: string;
  timestamp?: string;
  type?: string;
  text?: {
    body?: string;
  };
};

type WebhookPayload = {
  entry?: Array<{
    changes?: Array<{
      value?: {
        messages?: WhatsAppMessage[];
      };
    }>;
  }>;
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const WHATSAPP_TOKEN = Deno.env.get("WHATSAPP_TOKEN") ?? "";
const WHATSAPP_PHONE_NUMBER_ID = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID") ?? "";
const WHATSAPP_VERIFY_TOKEN = Deno.env.get("WHATSAPP_VERIFY_TOKEN") ?? "";
const META_APP_SECRET = Deno.env.get("META_APP_SECRET") ?? "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    persistSession: false,
  },
});

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const toHex = (buffer: ArrayBuffer): string =>
  Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

const timingSafeEqual = (a: Uint8Array, b: Uint8Array): boolean => {
  if (a.length !== b.length) {
    return false;
  }
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a[i] ^ b[i];
  }
  return result === 0;
};

const computeSignature = async (body: Uint8Array, secret: string): Promise<string> => {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, body);
  return toHex(signature);
};

const verifySignature = async (request: Request, body: Uint8Array): Promise<boolean> => {
  const signatureHeader = request.headers.get("x-hub-signature-256");
  if (!signatureHeader || !signatureHeader.startsWith("sha256=")) {
    return false;
  }
  if (!META_APP_SECRET) {
    return false;
  }
  const expected = `sha256=${await computeSignature(body, META_APP_SECRET)}`;
  return timingSafeEqual(encoder.encode(signatureHeader), encoder.encode(expected));
};

const parsePayload = (body: Uint8Array): WebhookPayload | null => {
  try {
    return JSON.parse(decoder.decode(body)) as WebhookPayload;
  } catch (error) {
    console.error("Failed to parse webhook payload", error);
    return null;
  }
};

const logMessages = async (messages: WhatsAppMessage[]): Promise<void> => {
  if (!messages.length) {
    return;
  }

  const { error } = await supabase.from("whatsapp_messages").insert(
    messages.map((message) => ({
      payload: message,
    })),
  );

  if (error) {
    console.error("Failed to log WhatsApp messages", error);
  }
};

const replyToMessage = async (message: WhatsAppMessage): Promise<void> => {
  if (!message.from || !message.text?.body) {
    return;
  }

  const responseBody = {
    messaging_product: "whatsapp",
    to: message.from,
    text: {
      body: `Thanks for your message! You said: ${message.text.body}`,
    },
  };

  const response = await fetch(
    `https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseBody),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Failed to send WhatsApp reply", response.status, errorText);
  }
};

Deno.serve(async (request) => {
  if (request.method === "GET") {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("hub.mode");
    const token = searchParams.get("hub.verify_token");
    const challenge = searchParams.get("hub.challenge");

    if (mode === "subscribe" && token === WHATSAPP_VERIFY_TOKEN && challenge) {
      return new Response(challenge, { status: 200 });
    }

    return new Response("Forbidden", { status: 403 });
  }

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const body = new Uint8Array(await request.arrayBuffer());
  const signatureValid = await verifySignature(request, body);

  if (!signatureValid) {
    return new Response("Forbidden", { status: 403 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return new Response("Bad Request", { status: 400 });
  }

  const messages: WhatsAppMessage[] = [];
  let replyMessage: WhatsAppMessage | null = null;

  for (const entry of payload.entry ?? []) {
    for (const change of entry.changes ?? []) {
      for (const message of change.value?.messages ?? []) {
        messages.push(message);
        if (!replyMessage && message.type === "text") {
          replyMessage = message;
        }
      }
    }
  }

  await logMessages(messages);

  if (replyMessage) {
    await replyToMessage(replyMessage);
  }

  return new Response("OK", { status: 200 });
});
