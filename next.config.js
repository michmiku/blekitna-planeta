const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    } else {
      require("./scripts/generate-sitemap");
    }
    return config;
  },
  env: {
    ROOT: __dirname,
    SITE_URL: "https://localhost:3000",
  },
};
