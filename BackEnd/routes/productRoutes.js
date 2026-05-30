const express = require("express");
const router = express.Router();
const {createProduct, getAllProducts} = require("../controllers/productController");
const authMiddleware = require("../Middleware/authMiddleware");
const uploadImageProvider = require("../Middleware/uploadimages");
router.post("/products", authMiddleware, uploadImageProvider, createProduct);
router.get("/products",  getAllProducts);
module.exports =router;