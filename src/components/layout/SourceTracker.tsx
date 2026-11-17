"use client";

import { useEffect } from "react";
import { initSourceTracking, tagWhatsAppHref } from "@/lib/source-tracking";

export function SourceTracker() {
  useEffect(() => {
    initSourceTracking();
    // Tag every WhatsApp link with where the visitor came from, right before it opens
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href*='wa.me'], a[href*='whatsapp.com']") as HTMLAnchorElement | null;
      if (a) a.href = tagWhatsAppHref(a.href);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
