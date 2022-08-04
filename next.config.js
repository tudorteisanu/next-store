/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    i18n: {
        locales: ["en"],
        defaultLocale: "en"
    },
    productionBrowserSourceMaps: true,
    images: {
        domains: ['template.nanoit.dev'],
    },
    async redirects() {
        return [
            {
                source: '/static/:path',
                destination: 'http://localhost:8000/static/:path',
                permanent: false
            }
        ];
    }
}

module.exports = nextConfig
