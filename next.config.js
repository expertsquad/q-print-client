/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "62.171.145.157",
      },
      {
        protocol: "http",
        hostname: "192.168.0.176",
      },
    ],
  },
};

module.exports = nextConfig;
