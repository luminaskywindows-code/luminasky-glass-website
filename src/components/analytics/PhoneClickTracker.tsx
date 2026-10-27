"use client";

import { useEffect } from "react";
import { trackPhoneConversion } from "@/lib/gtag";

export function PhoneClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest?.("a[href]");
      if (anchor instanceof HTMLAnchorElement && anchor.href.startsWith("tel:")) {
        trackPhoneConversion();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
