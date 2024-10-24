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
    webpack: (config) => {
      config.externals = [...config.externals, { canvas: 'canvas' }]; // required to make Konva & react-konva work
      return config;
    },
}

module.exports = nextConfig
