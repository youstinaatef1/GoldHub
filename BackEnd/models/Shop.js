// Call Mongoose
const mongoose = require("mongoose");
// const { type } = require("../controllers/validation/registerSchema");
// const { required } = require("joi");
// Create Schema
const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true,
        trim: true
    },
    logo: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    workingHours: {

        from: {
            type: String,
            required: true
        },

        to: {
            type: String,
            required: true
        }
    },
    goldPrice: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});
// Create model
const Shop = mongoose.model("Shop", shopSchema);
// exports module
module.exports = Shop;