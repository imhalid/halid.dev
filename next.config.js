const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
      // allow next/image to serve remote images from safelisted domains
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/halid/**",
        },
        { hostname: "api.microlink.io" },
        { hostname: "pbs.twimg.com" },
      ],
    },
  },
});
