const User = require("../models/User");
const Shop = require("../models/Shop");
const Product = require("../models/Product");
const productSchema = require("./validation/productValidation");
const createProduct = async(req, res) => {
    try {
        if (!req.files || req.files.length === 0) return res.status(400).json({ msg: "Please Add Images"});
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
        // const shopId = req.shop.id;
        // Create New Product
        value.images = req.files.map(file => file.path);
        const product = await Product.create(value);
        // Response
        res.status(201).json({
            msg: "Done Create Product",
            data: product
        });

    } catch (error) {
          console.log(error);

   res.status(500).json({
      msg: error.message,
      error
   });
    }
}
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
module.exports = {
    createProduct,
    getAllProducts
};
