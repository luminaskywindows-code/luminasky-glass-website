"use client";

import { useEffect } from "react";
import { initSourceTracking } from "@/lib/source-tracking";

export function SourceTracker() {
  useEffect(() => {
    initSourceTracking();
  }, []);
  return null;
}
