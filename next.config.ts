import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Blocks all iframes
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';", // Blocks framing
          },          
          {
            key: "Strict-Transport-Security",
            value: "max-age=7776000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
