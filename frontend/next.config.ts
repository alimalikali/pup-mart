import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "your-cdn-domain.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip linting in production builds
  },
};

export default nextConfig;
