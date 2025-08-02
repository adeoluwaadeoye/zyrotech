// src/app/api/og/route.ts
import { ImageResponse } from "next/og";
import React from "react";

// App Router requires this
export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: "white",
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        ZyroTech – Premium Gadgets at Unbeatable Prices
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
