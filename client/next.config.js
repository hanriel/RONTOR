/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.tradeinn.com',
            port: '',
            pathname: '/f/**',
          },
        ],
      },
}

module.exports = nextConfig
