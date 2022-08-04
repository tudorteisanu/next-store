/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    output: 'standalone',
    i18n: {
        locales: ["en"],
        defaultLocale: "en"
    },
    productionBrowserSourceMaps: true,
    images: {
        domains: ['template.nanoit.dev']
    }
}

module.exports = nextConfig
