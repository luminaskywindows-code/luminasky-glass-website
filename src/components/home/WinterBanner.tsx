"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Snowflake } from "lucide-react";
import { WINTER_READY_ENABLED } from "@/lib/constants";

const STORAGE_KEY = "winter-banner-dismissed";

export function WinterBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!WINTER_READY_ENABLED) return;
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "true") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // localStorage unavailable
    }
  };

  return (
    <div className="bg-accent text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm font-medium pr-8">
        <Snowflake className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>
          Winter is coming.{" "}
          <Link
            href="/winter-ready?utm_source=homepage-banner"
            className="underline underline-offset-2 font-semibold hover:text-blue-100 transition-colors"
          >
            Book a $30 Winter Ready Inspection &rarr;
          </Link>
        </span>
      </div>
      <button
        onClick={dismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}
