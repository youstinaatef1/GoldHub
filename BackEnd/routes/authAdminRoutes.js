// require express
const express = require("express");
// Router
const router = express.Router();
// Require Controller
const loginController = require("../controllers/authAdmin.controller");
// Init Method Request
router.post("/logina", loginController);
// Export
module.exports = router;