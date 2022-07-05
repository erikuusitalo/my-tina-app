const withSvgr = require("next-svgr");

module.exports = withSvgr({
  async rewrites() {
    return [];
  },
});
