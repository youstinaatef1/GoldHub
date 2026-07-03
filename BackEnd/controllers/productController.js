const User = require("../models/User");
const Shop = require("../models/Shop");
const Product = require("../models/Product");
const productSchema = require("./validation/productValidation");
const createProduct = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0)
      return res.status(400).json({ msg: "Please Add Images" });

    if (!req.user) {
      return res.status(401).json({ msg: "User Not Found" });
    }
    const { error, value } = productSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });
    }
    const userId = req.user.id;
    const shop = await Shop.findOne({ owner: userId });

    if (!shop) {
      return res.status(404).json({
        msg: "You don't own a shop"
      });
    } 
    const user = await User.findById(userId);
    if (!user || user.role !== "seller") {
      return res.status(403).json({
        msg: "Only sellers can add products"
      });
    }
    // Create Product
    value.images = req.files.map(file => file.path);
    value.shop = shop._id;
    const product = await Product.create(value);
    return res.status(201).json({
      msg: "Done Create Product",
      data: product
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      msg: error.message,
      error
    });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        // 1. Get user
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                msg: "User Not Found"
            });
        }
        // 2. Check role
        if (user.role !== "seller") {
            return res.status(403).json({
                msg: "You are not allowed to update product"
            });
        }
        // 3. Get product
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                msg: "Product Not Found"
            });
        }
        // 4. Get shop from product
        const shopU = await Shop.findById(product.shop);
        if (!shopU) {
            return res.status(404).json({
                msg: "Shop Not Found"
            });
        }
        // 5. Authorization check (important)
        if (
            user.role === "seller" &&
            shopU.owner.toString() !== user._id.toString()
        ) {
            return res.status(403).json({
                msg: "You can update only your shop"
            });
        }
        // 6. Build update data
        const updateData = {};
        const fields = [
            "productName",
            "description",
            "price",
            "category",
            "karat",
            "weight",
            "images",
            "stock",
            "isAvailable"
        ];
        fields.forEach((field) => {
            if (req.body[field] !== undefined) {
                updateData[field] = req.body[field];
            }
        });
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                msg: "No update fields provided"
            });
        }
        // 7. Update product
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            updateData,
            {
                new: true,
                runValidators: true
            }
        );
        // 8. Response
        return res.status(200).json({
            msg: "Product Updated Successfully",
            data: updatedProduct
        });
    } catch (error) {
        console.error(error);
        if (error.kind === "ObjectId" || error.name === "CastError") {
            return res.status(400).json({
                msg: "Invalid Product ID"
            });
        }
        return res.status(500).json({
            msg: error.message
        });
    }
};
const deleteProduct = async(req, res) => {
    try {
        const userRole = req.user.role;
        if (userRole !== "admin" && userRole !== "seller") {
            return res.status(403).json({
                msg: "Access Denied: Only Admin or Seller can delete Products"
            });
        }
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({
                msg: "Product Not Found"
            });  
        }
        res.status(200).json({
            msg: "Product deleted Successfully"
        });
    } catch (error) {
        console.error(error);
        if (error.kind === "ObjectId") {
      return res.status(400).json({
        msg: "Invalid Product ID",
      });
    }
    res.status(500).json({
      msg: "Server Error",
    });
    }
}
const addImagesToProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                msg: "Product Not Found"
            });
        }
        // new images
        const newImages = req.files.map(file => file.path);
        // push new image to old images
        product.images.push(...newImages);
        await product.save();
        res.status(200).json({
            msg: "Images added Successfully",
            product
        });
    } catch (error) {
          console.error(error);

      res.status(500).json({
         msg: "Server Error"
      });
    }
}
module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    addImagesToProduct
};
