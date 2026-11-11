/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "studio-size.com",
      },
    ],
  },
};

module.exports = nextConfig;