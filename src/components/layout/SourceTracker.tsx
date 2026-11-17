"use client";

import { useEffect } from "react";
import { initSourceTracking, tagWhatsAppHref, trackingPhone } from "@/lib/source-tracking";

const MAIN = /\(?437\)?[-. ]?344[-. ]?8490/g;

/** Shows the visitor the phone number of the source they came from, so a call tells the office where they came from. */
function swapPhones(root: ParentNode, num: string) {
  const d = num.replace(/\D/g, "").slice(-10);
  const display = `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  root.querySelectorAll?.("a[href^='tel:']").forEach((el) => {
    const a = el as HTMLAnchorElement;
    if (/4373448490/.test(a.href.replace(/\D/g, ""))) a.href = `tel:+1${d}`;
  });
  const walker = document.createTreeWalker(root as Node, NodeFilter.SHOW_TEXT);
  const hits: Text[] = [];
  while (walker.nextNode()) { const n = walker.currentNode as Text; if (MAIN.test(n.data)) hits.push(n); MAIN.lastIndex = 0; }
  hits.forEach((n) => { n.data = n.data.replace(MAIN, display); });
}

export function SourceTracker() {
  useEffect(() => {
    initSourceTracking();
    const num = trackingPhone();
    let obs: MutationObserver | null = null;
    if (num && /\d{10}/.test(num.replace(/\D/g, ""))) {
      swapPhones(document.body, num);
      obs = new MutationObserver((muts) => muts.forEach((m) => m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) swapPhones(n as Element, num);
        else if (n.nodeType === 3 && n.parentElement) swapPhones(n.parentElement, num);
      })));
      obs.observe(document.body, { childList: true, subtree: true });
    }
    // Tag every WhatsApp link with where the visitor came from, right before it opens
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href*='wa.me'], a[href*='whatsapp.com']") as HTMLAnchorElement | null;
      if (a) a.href = tagWhatsAppHref(a.href);
    };
    document.addEventListener("click", onClick, true);
    return () => { document.removeEventListener("click", onClick, true); obs?.disconnect(); };
  }, []);
  return null;
}
