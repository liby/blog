// @ts-check

const withTM = require("next-transpile-modules")(["style9"]);
const withStyle9 = require("style9/next");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStyle9()(withTM());

module.exports = nextConfig;
