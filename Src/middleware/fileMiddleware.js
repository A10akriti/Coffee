const multer = require("multer");
const fs = require("fs");
const helper = require("../../config/helper");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../../config/cloudinary");



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    return {
      folder: req.uploadPath || "Default_folder",
      allowed_formats: ["jpg", "jpeg", "png", "gif"],
      public_id: `${Date.now()}-${
        helper.generateFilename(10) + "-" + file.originalname.split(".")[0]
      }`,
    };
  },
});

const Uploader = multer({
  storage: storage,
});
const fileMiddleware = (fields, folder) => {
  return (req, res, next) => {
    req.uploadPath = folder;
    Uploader.fields(fields)(req, res, next);
    next()
  };
};

module.exports = fileMiddleware;