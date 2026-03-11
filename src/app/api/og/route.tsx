import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Technose Digital Pvt Ltd";
  const subtitle =
    searchParams.get("subtitle") ||
    "Conversion-focused digital experiences for ambitious businesses.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 45%, #064e3b 100%)",
          color: "#f8fafc",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "1px solid #334155",
            borderRadius: "999px",
            padding: "10px 22px",
            fontSize: 24,
            color: "#a5f3fc",
          }}
        >
          Technose Digital Pvt Ltd
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1" }}>{subtitle}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
