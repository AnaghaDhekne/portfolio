/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
    unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
    basePath: '/portfolio',
    trailingSlash: true,
  // basePath: '/portfolio',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
