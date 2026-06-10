const User = require("../models/User");
const Shop = require("../models/Shop");
const Product = require("../models/Product");
const shopValidation = require("./validation/shopValidation");
try {
    if (!req.file) return res.status(400).json({ msg: "Please Add Your Logo" });
    const{error, value} = shopValidation.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });
} catch (error) {
    
}
