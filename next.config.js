/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    publicRuntimeConfig: {
        backendUrl: "https://api.nanoit.dev/",
    },
}

module.exports = nextConfig
