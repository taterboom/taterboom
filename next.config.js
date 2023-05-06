/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
}

const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

module.exports = withNextra(nextConfig)
