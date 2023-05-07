/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'feria-hermana.s3.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'api.feriahermana.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost.com',
      },
    ],
  },
}

module.exports = nextConfig
