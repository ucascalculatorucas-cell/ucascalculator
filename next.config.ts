import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep URLs without trailing slash so sitemap/canonicals return 200 (not 308).
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
