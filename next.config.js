// @ts-check

const withTM = require("next-transpile-modules")(["style9"]);
const withStyle9 = require("style9/next");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   reactRoot: true,
  // },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  ...withStyle9()(withTM()),
};
module.exports = nextConfig;
