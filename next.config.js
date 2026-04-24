/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  optimizeFonts: true,

  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;