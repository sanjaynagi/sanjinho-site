/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      { hostname: 'i.imgur.com' },
      { hostname: 'imgur.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'i.gr-assets.com' },
      { hostname: 'cdn-images-1.medium.com' },
      { hostname: 'miro.medium.com' },
      { hostname: 'blog.jscrambler.com' },
      { hostname: 'crowdbotics.ghost.io' },
      { hostname: 'img.youtube.com' },
      { hostname: 'blog.logrocket.com' },
      { hostname: 'hackernoon.com' },
      { hostname: 'blog.appsignal.com' },
      { hostname: 'hackernoon.imgix.net' },
      { hostname: 'appjs.co' },
      { hostname: 'pbs.twimg.com' },
      { hostname: '2022.appjs.co' },
    ],
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = withMDX(nextConfig)
