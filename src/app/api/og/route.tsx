import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "LuminaSky Glass Services";
  const subtitle =
    searchParams.get("subtitle") || "Toronto Window Glass Repair";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#38bdf8",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
              fontSize: "28px",
              color: "#0f172a",
              fontWeight: 700,
            }}
          >
            LS
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            LuminaSky Glass Services
          </div>
        </div>

        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          {subtitle}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            gap: "32px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "#38bdf8",
              fontWeight: 600,
            }}
          >
            437-344-8490
          </div>
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#475569",
            }}
          />
          <div
            style={{
              fontSize: "22px",
              color: "#64748b",
            }}
          >
            www.luminasky.com
          </div>
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#475569",
            }}
          />
          <div
            style={{
              fontSize: "22px",
              color: "#64748b",
            }}
          >
            Open 24/7
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
