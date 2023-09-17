/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  typescript: {
    // Handled during CI
    ignoreBuildErrors: true,
  },
  eslint: {
    // Handled during CI
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
