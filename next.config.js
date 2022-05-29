/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
