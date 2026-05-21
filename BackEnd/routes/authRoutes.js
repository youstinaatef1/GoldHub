const express = require("express");
const router = express.Router();
const{register, login} = require("../controllers/userController");
const authMiddleware = require("../Middleware/authMiddleware");
router.post("/user", register);
router.post("/login", login);
module.exports = router;