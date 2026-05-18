const User = require("../models/User");
const Shop = require("../models/Shop");
const Product = require("../models/Product");
const productSchema = require("./validation/productValidation");
const createProduct = async(req, res) => {
    try {
        if(!req.files) return res.status(400).json({ msg: "Please Add Images"});
        const{error, value} = productSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });
        if(error) {
            return res.status(400).json({
                msg: error.details.map((err) => err.message)
            });
        }
        // Get Data From req.body
        const { productName, description, price, category, karat, weight, stock, views} = value;
        const userId = req.user.id;
        const shopId = req.shop.id;
        // Create New Product
        value.images = req.files.path;
        const product = await Product.create(value);
        // Response
        res.status(201).json({
            msg: "Done Create Product",
            data: product
        });

    } catch (error) {
         res.status(500).json({ msg: "Server Error" });
    }
}
module.exports = {createProduct};
