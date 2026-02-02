import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const verifyToken = Deno.env.get("WHATSAPP_VERIFY_TOKEN") ?? "";
const whatsappPhoneNumberId = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID") ?? "";
const whatsappToken = Deno.env.get("WHATSAPP_TOKEN") ?? "";

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    persistSession: false,
  },
});

const textReply = "Maria here… WhatsApp is connected.";

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

    try {
      payload = await req.json();
    } catch {
      return new Response("ok", { status: 200 });
    }

    const message = (payload as any)?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    const waId = message?.from as string | undefined;
    const messageType = (message?.type as string | undefined) ?? "unknown";
    const bodyText = messageType === "text" ? (message?.text?.body as string | undefined) ?? null : null;

    if (waId) {
      try {
        await supabase.from("whatsapp_messages").insert({
          wa_id: waId,
          direction: "in",
          message_type: messageType,
          body_text: bodyText,
          payload_json: payload,
        });
      } catch {
        // Ignore insert errors to avoid failing the webhook.
      }
    }

    if (waId && whatsappPhoneNumberId && whatsappToken) {
      let outboundPayload: Record<string, unknown> | null = null;

      try {
        const response = await fetch(
          `https://graph.facebook.com/v20.0/${whatsappPhoneNumberId}/messages`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${whatsappToken}`,
            },
            body: JSON.stringify({
              messaging_product: "whatsapp",
              to: waId,
              type: "text",
              text: {
                body: textReply,
              },
            }),
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
          payload_json: outboundPayload,
        });
      } catch {
        // Ignore insert errors to avoid failing the webhook.
      }
    }

    return new Response("ok", { status: 200 });
  }

  return new Response("Method Not Allowed", { status: 405 });
});
