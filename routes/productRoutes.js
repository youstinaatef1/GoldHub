const express = require("express");
const router = express.Router();
const {createProduct} = require("../controllers/productController");
const authMiddleware = require("../Middleware/authMiddleware");
const uploadImageProvider = require("../Middleware/uploadimages");
router.post("/products", authMiddleware, uploadImageProvider, createProduct);
module.exports =router;