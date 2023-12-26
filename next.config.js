/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false, // Disable source maps in development
    optimizeFonts: false, // Disable font optimization
    images: {
        domains: ['encrypted-tbn0.gstatic.com'],
    },
}

module.exports = nextConfig
