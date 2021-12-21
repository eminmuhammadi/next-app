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
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
    CDN_URL: process.env.CDN_URL,
    APP_NAME: process.env.APP_NAME,
  },
  images: {
    domains: [
      'ik.imagekit.io'
    ],
  },
}
