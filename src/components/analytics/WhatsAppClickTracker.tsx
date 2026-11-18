"use client";

import { useEffect } from "react";
import { trackWhatsAppConversion } from "@/lib/gtag";

export function WhatsAppClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest?.("a[href]");
      if (
        anchor instanceof HTMLAnchorElement &&
        anchor.href.includes("wa.me/")
      ) {
        trackWhatsAppConversion();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
