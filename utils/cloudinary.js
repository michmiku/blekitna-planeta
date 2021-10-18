require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "kyambalo",
  api_key: process.env.cloudinary_key,
  api_secret: process.env.cloudinary_secret,
});
module.exports = { cloudinary };
