/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    publicRuntimeConfig: {
        backendUrl: "https://api.nanoit.dev/",
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
