/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const path = require('path')

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['test.cdn.fikrat.app'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "./src/styles/breakpoints.scss";
      @import "./src/styles/mixins.scss";
      @import "./src/styles/unit.scss";
      @import "./src/styles/colors.scss";
      @import "./src/styles/styles.scss";
      `,
  },
})

module.exports = nextConfig
