const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "uploads/");
   },
   filename: (req, file, cb) => {
      const uniqueName =
         crypto.randomBytes(16).toString("hex") +
         path.extname(file.originalname).toLowerCase();
      cb(null, uniqueName);
   }
});
const fileFilter = (req, file, cb) => {
   const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp"
   ];
   if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
   } else {
      cb(new Error("Only JPG, PNG, WEBP images are allowed"), false);
   }
};
const upload = multer({
   storage,
   fileFilter,
   limits: {
      fileSize: 5 * 1024 * 1024,
      files: 5
   }
});
module.exports = upload.array("images", 5);