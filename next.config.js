/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    output: 'standalone',
    publicRuntimeConfig: {
        // backendUrl: "https://api.nanoit.dev/",
        backendUrl: process.env.NEXT_PUBLIC_API_URL,
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    productionBrowserSourceMaps: true,
    images: {
        domains: ['api.nanoit.dev']
    }
}

module.exports = nextConfig
