// @ts-check
const { withContentlayer } = require("next-contentlayer");
const withStyle9 = require('style9-webpack/next');

function compose(
  /**
   * @type {Array<(nextConfig?: Partial<import("next").NextConfig>) => Partial<import("next").NextConfig>>}
   */
  ...plugins
) {
  return (/** @type {import("next").NextConfig} */ options) => {
    return plugins.reduce((acc, next) => {
      return next(acc);
    }, options);
  };
}

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   reactRoot: true,
  // },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};

module.exports = compose(
  withContentlayer,
  // @ts-ignore
  withStyle9({
    parserOptions: {plugins: ['typescript', 'jsx', 'importAssertions'] }, // // {import('@babel/core').ParserOptions} optional, default is `{ plugins: ['typescript', 'jsx'] }`
    minifyProperties: process.env.NODE_ENV === 'production', // {boolean?} optional, default is false, recommended to enable this option in production
    incrementalClassnames: false, // {boolean?} optional, default is false
  })
)(nextConfig);
