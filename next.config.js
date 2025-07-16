/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'export',
  basePath: '/vivekdongare.io-portfolio',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig