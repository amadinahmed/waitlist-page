import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/waitlist-page',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
