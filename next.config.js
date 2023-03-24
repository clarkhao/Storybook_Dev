/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // The locales you want to support in your app
    locales: ["en", "cn", "jp"],
    defaultLocale: "cn",
    //auto detect
    //localeDetection: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig