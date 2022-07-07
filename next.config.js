const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_UNSPLASH_key_ID,
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = withContentlayer(nextConfig);
