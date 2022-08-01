/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    publicRuntimeConfig: {
        backendUrl: process.env.NEXT_PUBLIC_API_URL,
    },
}

module.exports = nextConfig
