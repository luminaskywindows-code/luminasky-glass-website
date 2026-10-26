"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "z3jx92wo61";

export function ClarityInit() {
  useEffect(() => {
    clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
