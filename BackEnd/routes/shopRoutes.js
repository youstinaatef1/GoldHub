const express = require("express");
const router = express.Router();
const {createShop, getAllShops, updateShop} = require("../controllers/shopController");
const authMiddleware = require("../Middleware/authMiddleware");
const uploadLogo = require("../Middleware/uploadLogo");
router.post("/shop", authMiddleware, uploadLogo, createShop);
router.get("/allShops", getAllShops);
router.put("/:shopId", authMiddleware, updateShop);
module.exports = router;