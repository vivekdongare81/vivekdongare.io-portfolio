const isProd = process.env.NODE_ENV === 'production'
const repositoryName = 'vivekdongare.io-portfolio'

// Remove basePath and assetPrefix for now to test the export
module.exports = {
  output: 'export',
  // Temporarily remove basePath and assetPrefix for debugging
  // basePath: isProd ? `/${repositoryName}` : '',
  // assetPrefix: isProd ? `/${repositoryName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Remove the env variable for now
}