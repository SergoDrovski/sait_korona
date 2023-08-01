/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8081',
      },
      {
        protocol: 'https',
        hostname: 'api.koronatuapse.ru',
        port: '',
      },
    ],
  },
}


module.exports = nextConfig
