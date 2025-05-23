/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        API_URL: `${process.env.NEXT_PUBLIC_API_URL}`,
    },
    images: {
        domains: ['clieent-bucket-s3.s3.sa-east-1.amazonaws.com'],
    },
    crossOrigin: 'anonymous',
}

module.exports = nextConfig
