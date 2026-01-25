import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Empty turbopack config to silence Next.js 16 warning about webpack config
  turbopack: {},
  webpack: (config, { isServer }) => {
    // Exclude gas-tech-tutor directory from compilation
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/gas-tech-tutor/**'],
    };
    return config;
  },
};

export default nextConfig;
