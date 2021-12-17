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
  env: {
    API_URL: process.env.API_URL,
  }
}
