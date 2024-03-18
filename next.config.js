/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      // {
      //   protocol: "http",
      //   hostname: "5.182.33.12",
      // },
      {
        protocol: "http",
        hostname: "192.168.0.183",
      },
    ],
  },
};

module.exports = nextConfig;
