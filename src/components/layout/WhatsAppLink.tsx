"use client";

import { WHATSAPP_HREF } from "@/lib/constants";
import { trackWhatsAppConversion } from "@/lib/gtag";

export function WhatsAppLink({
  className,
  children,
  "aria-label": ariaLabel = "Chat on WhatsApp",
}: {
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={() => { trackWhatsAppConversion(); window.open(WHATSAPP_HREF, "_blank", "noopener,noreferrer"); }}
    >
      {children}
    </button>
  );
}
