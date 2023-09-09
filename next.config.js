/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `
      @import "./src/styles/breakpoints.scss";
      @import "./src/styles/mixins.scss";
      @import "./src/styles/unit.scss";
      @import "./src/styles/colors.scss";
      `,
	},
}

module.exports = nextConfig
