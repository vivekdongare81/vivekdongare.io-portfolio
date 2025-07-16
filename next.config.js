const isProd = process.env.NODE_ENV === 'production'
const repositoryName = 'vivekdongare.io-portfolio'

// For local development, we don't want the basePath
const basePath = process.env.GITHUB_ACTIONS ? `/${repositoryName}` : ''
const assetPrefix = process.env.GITHUB_ACTIONS ? `/${repositoryName}/` : ''

module.exports = {
  output: 'export',
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
}