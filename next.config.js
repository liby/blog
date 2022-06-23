// @ts-check
const { withContentlayer } = require("next-contentlayer");
const withTM = require("next-transpile-modules")(["style9"]);
const withStyle9 = require("style9/next");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // rehypePlugins: [
    //   require("@mapbox/rehype-prism"),
    //   require("rehype-join-line"),
    // ],
    providerImportSource: "@mdx-js/react",
  },
});

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

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // experimental: {
  //   reactRoot: true,
  // },
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       "react/jsx-runtime.js": "preact/compat/jsx-runtime",
  //       react: "preact/compat",
  //       "react-dom/test-utils": "preact/test-utils",
  //       "react-dom": "preact/compat",
  //     });
  //   }

  //   return config;
  // },
};

module.exports = compose(
  withContentlayer,
  withMDX,
  withStyle9({
    parserOptions: {
      plugins: ["typescript", "jsx", "importAssertions"],
    },
  }),
  withTM
)(nextConfig);
