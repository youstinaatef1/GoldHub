const User = require("../models/User");
const Shop = require("../models/Shop");
const Product = require("../models/Product");
const shopSchema = require("./validation/shopValidation");
// const createShop = async(req, res) => {
// try {
//     if (!req.file) return res.status(400).json({ msg: "Please Add Your Logo" });
//     const{ error, value } = shopSchema.validate(req.body, {
//             abortEarly: false,
//             stripUnknown: true
//         });
//         if(error){
//             return res.status(400).json({
//                 msg: error.details.map((err) => err.message)
//             });   
//         }
//         // Get Data From req.body
//         const {shopName, location, phoneNumber,  goldPrice, isActive} = value;
//         // Create New Shop
//         value.logo = req.file.path;
//         value.owner = req.user.id;
//         value.owner = owner;

//         // Check Role
//         const checkSeller = await User.findById(owner);
//         if (!checkSeller) return res.status(404).json({ msg: "User Not Found" });
//          if (checkSeller.role !== "seller") return res.json({ msg: "You Not Seller to Add" });
//         const shop = await Shop.create(value);
//         // Response
//         res.status(201).json({
//             msg: "Done Create Shop",
//             data: shop
//         });

// } catch (error) {
//     console.log(error);
//     res.status(500).json({
//         msg: error.message,
//         error
//     });
// }
// };
const createShop = async(req, res) => {
try {
    if (!req.file) {
        return res.status(400).json({
            msg: "Please Add Your Logo"
        });
    }
    const { error, value } = shopSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
    });
    if(error){
        return res.status(400).json({
            msg: error.details.map((err) => err.message)
        });
    }
    // Get Owner ID
    const owner = req.user.id;
    // Create New Shop
    value.logo = req.file.path;
    value.owner = owner;
    // Check Role
    const checkSeller = await User.findById(owner);
    if (!checkSeller) {
        return res.status(404).json({
            msg: "User Not Found"
        });
    }
    if (checkSeller.role !== "seller") {
        return res.status(403).json({
            msg: "You Not Seller to Add"
        });
    }
    const shop = await Shop.create(value);
    res.status(201).json({
        msg: "Done Create Shop",
        data: shop
    });
} catch (error) {
    console.log(error);
    res.status(500).json({
        msg: error.message
    });
}

};
const getAllShops = async (req, res) => {
    try {
        const shops = await Shop.find();
        res.json(shops);
        // res.status(200).json({
        //     msg: "All Shops",
        //     data: shops
        // });
    } catch (error) {
       res.status(500).json({ msg: "Server Error" });
    }
};
const updateShop = async (req, res) => {
    try {
        const { shopId } = req.params;
        // Get User
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                msg: "User Not Found"
            });
        }
        // Check Role
        if (user.role !== "seller" && user.role !== "admin") {
            return res.status(403).json({
                msg: "You are not allowed to update shop"
            });
        }
        // Find Shop
        const shopU = await Shop.findById(shopId);
        if (!shopU) {
            return res.status(404).json({
                msg: "Shop Not Found"
            });
        }
        // Seller can update only his shop
        if (
            user.role === "seller" &&
            shopU.owner.toString() !== user._id.toString()
        ) {
            return res.status(403).json({
                msg: "You can update only your shop"
            });
        }
        const {
            shopName,
            location,
            phoneNumber,
            goldPrice,
            isActive
        } = req.body;

        const shop = await Shop.findByIdAndUpdate(
            shopId,
            {
                shopName,
                location,
                phoneNumber,
                goldPrice,
                isActive
            },
            {
                new: true,
                runValidators: true
            }
        );
        res.status(200).json({
            msg: "Shop Updated Successfully",
            data: shop
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

module.exports = {
    createShop,
    getAllShops,
    updateShop
};
