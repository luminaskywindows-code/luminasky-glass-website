import { NextRequest, NextResponse } from "next/server";
import { notifyIndexNow } from "@/lib/indexnow";
import { INDEXNOW_KEY } from "@/lib/constants";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.secret !== INDEXNOW_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!body.urls || !Array.isArray(body.urls)) {
    return NextResponse.json({ error: "urls array required" }, { status: 400 });
  }

  const result = await notifyIndexNow(body.urls);
  return NextResponse.json(result);
}
