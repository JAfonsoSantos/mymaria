import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const verifyToken = Deno.env.get("WHATSAPP_VERIFY_TOKEN") ?? "";
const whatsappPhoneNumberId = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID") ?? "";
const whatsappToken = Deno.env.get("WHATSAPP_TOKEN") ?? "";
const whatsappAppSecret = Deno.env.get("WHATSAPP_APP_SECRET") ?? "";

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    persistSession: false,
  },
});

const textReply = "Maria here… WhatsApp is connected.";

const encoder = new TextEncoder();

const toHex = (buffer: ArrayBuffer): string =>
  Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

const timingSafeEqual = (left: string, right: string): boolean => {
  if (left.length !== right.length) {
    return false;
  }
  let result = 0;
  for (let i = 0; i < left.length; i += 1) {
    result |= left.charCodeAt(i) ^ right.charCodeAt(i);
  }
  return result === 0;
};

const verifySignature = async (signatureHeader: string | null, body: ArrayBuffer): Promise<boolean> => {
  if (!whatsappAppSecret) {
    console.error("Missing WHATSAPP_APP_SECRET; rejecting webhook request.");
    return false;
  }

  if (!signatureHeader?.startsWith("sha256=")) {
    return false;
  }

  const signature = signatureHeader.replace("sha256=", "");
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(whatsappAppSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, body);
  const expected = toHex(digest);
  return timingSafeEqual(signature, expected);
};

const buildPayloadLog = (
  payload: Record<string, unknown>,
  meta: Record<string, unknown>,
): Record<string, unknown> => ({
  meta,
  payload,
});

serve(async (req) => {
  if (req.method === "GET") {
    const url = new URL(req.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");

    if (mode === "subscribe" && token && token === verifyToken) {
      return new Response(challenge ?? "", { status: 200 });
    }

    return new Response("Forbidden", { status: 403 });
  }

  if (req.method === "POST") {
    let payload: Record<string, unknown> | null = null;
    const bodyBuffer = await req.arrayBuffer();

    try {
      if (!await verifySignature(req.headers.get("x-hub-signature-256"), bodyBuffer)) {
        return new Response("Forbidden", { status: 403 });
      }

      payload = JSON.parse(new TextDecoder().decode(bodyBuffer)) as Record<string, unknown>;
    } catch {
      return new Response("ok", { status: 200 });
    }

    const message = (payload as any)?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    const waId = message?.from as string | undefined;
    const messageType = (message?.type as string | undefined) ?? "unknown";
    const bodyText = messageType === "text" ? (message?.text?.body as string | undefined) ?? null : null;
    const messageId = message?.id as string | undefined;
    const messageTimestamp = message?.timestamp as string | undefined;
    const receivedAt = new Date().toISOString();

    if (waId) {
      try {
        await supabase.from("whatsapp_messages").insert({
          wa_id: waId,
          direction: "in",
          message_type: messageType,
          body_text: bodyText,
          payload_json: buildPayloadLog(payload, {
            message_id: messageId,
            message_timestamp: messageTimestamp,
            received_at: receivedAt,
          }),
        });
      } catch (error) {
        console.error("Failed to insert inbound WhatsApp message log.", error);
      }
    } else {
      console.warn("WhatsApp webhook received without a sender ID.");
    }

    if (waId && whatsappPhoneNumberId && whatsappToken) {
      let outboundPayload: Record<string, unknown> | null = null;
      const outboundRequest = {
        messaging_product: "whatsapp",
        to: waId,
        type: "text",
        text: {
          body: textReply,
        },
      };

      try {
        const response = await fetch(
          `https://graph.facebook.com/v20.0/${whatsappPhoneNumberId}/messages`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${whatsappToken}`,
            },
            body: JSON.stringify(outboundRequest),
          },
        );

        outboundPayload = await response.json();
      } catch {
        outboundPayload = { error: "Failed to send reply" };
      }

      try {
        await supabase.from("whatsapp_messages").insert({
          wa_id: waId,
          direction: "out",
          message_type: "text",
          body_text: textReply,
          payload_json: buildPayloadLog(
            {
              request: outboundRequest,
              response: outboundPayload ?? {},
            },
            {
              sent_at: new Date().toISOString(),
              reply_to_message_id: messageId,
            },
          ),
        });
      } catch (error) {
        console.error("Failed to insert outbound WhatsApp message log.", error);
      }
    }

    return new Response("ok", { status: 200 });
  }

  return new Response("Method Not Allowed", { status: 405 });
});
