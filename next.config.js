/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Ensures Next.js generates static files
    images: {
        loader: 'custom',
        loaderFile: './src/lib/imageLoader.ts', // Custom image loader, can be removed if not needed
        unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
    trailingSlash: true,  // Adds trailing slashes to URLs
    distDir: 'out',  // Outputs static files to the out/ directory
    eslint: {
        ignoreDuringBuilds: true,  // Optional: Ignore ESLint during build
    },
};

module.exports = nextConfig;
