const User = require("../models/User");
const Shop = require("../models/Shop");
const Product = require("../models/Product");
const shopSchema = require("./validation/shopValidation");
const createShop = async(req, res) => {
try {
    if (!req.file) return res.status(400).json({ msg: "Please Add Your Logo" });
    const{ error, value } = shopSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });
        if(error) {
            
        }

} catch (error) {
    
}

}
