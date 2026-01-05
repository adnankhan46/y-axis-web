import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
 images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
