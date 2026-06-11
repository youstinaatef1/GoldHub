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
        if(error){
            return res.status(400).json({
                msg: error.details.map((err) => err.message)
            });   
        }
        // Get Data From req.body
        const {shopName, location, phoneNumber,  goldPrice, isActive} = value;
        // Create New Shop
        value.logo = req.file.path;
        value.owner = req.user.id;
        const shop = await Shop.create(value);
        // Response
        res.status(201).json({
            msg: "Done Create Shop",
            data: shop
        });

} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: error.message,
        error
    });
}
}
module.exports = {createShop};
