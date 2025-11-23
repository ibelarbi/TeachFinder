
const nextConfig = {
  webpack(config) {
    const assetRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );

    if (assetRule) {
      assetRule.exclude = /\.svg$/;
    }

    // Ajouter le loader SVGR
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
