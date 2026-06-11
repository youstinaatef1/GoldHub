const express = require("express");
const router = express.Router();
const {createShop} = require("../controllers/shopController");
const authMiddleware = require("../Middleware/authMiddleware");
const uploadLogo = require("../Middleware/uploadLogo");
router.post("/shop", authMiddleware, uploadLogo, createShop);
module.exports = router;