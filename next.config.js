/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        API_URL: `${process.env.NEXT_PUBLIC_API_URL}`,
    },

    crossOrigin: 'anonymous',
}

module.exports = nextConfig
