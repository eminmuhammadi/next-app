/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  optimizeCss: true,
  turboMode: true,
  enableBlurryPlaceholder: true,
  scriptLoader: true,
  staticPageGenerationTimeout: 90,
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[hash:base64:5]',
  },
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
    CDN_URL: process.env.CDN_URL,
  },
  images: {
    domains: [
      'ik.imagekit.io'
    ],
  },
}
