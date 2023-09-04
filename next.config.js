const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    } else {
      require("./scripts/generate-sitemap");
    }
    return config;
  },
  env: {
    ROOT: __dirname,
    SITE_URL: "https://localhost:3000",
    cloudinary_key: 564237899423339,
    cloudinary_secret: "_Lwkx00Yb6l26xLEkRv2pUpVUzo",
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["res.cloudinary.com"],
    path: "",
    loader: "cloudinary",
  },

};
