"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/constants";
import { trackWhatsAppConversion } from "@/lib/gtag";

export function WhatsAppHeroButton() {
  return (
    <button
      type="button"
      onClick={() => {
        trackWhatsAppConversion();
        window.open(WHATSAPP_HREF, "_blank", "noopener,noreferrer");
      }}
      className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-4 h-4" aria-hidden="true" />
      Send us a photo on WhatsApp
    </button>
  );
}
