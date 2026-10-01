import { INDEXNOW_KEY, SITE_URL } from "./constants";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export async function notifyIndexNow(urls: string | string[]): Promise<{
  ok: boolean;
  status: number;
  message: string;
}> {
  const urlList = Array.isArray(urls) ? urls : [urls];
  const host = new URL(SITE_URL).host;
  const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation,
        urlList,
      }),
    });

    return {
      ok: response.ok,
      status: response.status,
      message: response.ok
        ? `IndexNow: notified about ${urlList.length} URL(s)`
        : `IndexNow error: ${response.status} ${response.statusText}`,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      message: `IndexNow failed: ${error instanceof Error ? error.message : "unknown"}`,
    };
  }
}
