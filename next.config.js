/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'export',
  basePath: '/vivekdongare.io-portfolio',
  assetPrefix: 'https://vivekdongare81.github.io/vivekdongare.io-portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true
}

module.exports = nextConfig