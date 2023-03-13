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
}

module.exports = nextConfig