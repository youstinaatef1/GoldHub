//Call Mongoose
const { required } = require("joi");
const mongoose = require("mongoose");
const { type } = require("../controllers/validation/registerSchema");
//Create Schema
const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        enum: ["ring", "necklace", "coin", "bracelet", "earring", "bar"],
        required: true
    },
    karat:{
        type: Number,
        enum: [18, 21, 24],
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    images: 
    {
        type: [String],
        required: true
    },
    stock:{
        type: Number,
        default: 1
    },
    isAvailable:{
        type: Boolean,
        default: true
    },
    shop:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop",
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    views:{
        type: Number,
        default: 0
    },

}, {timestamps: true});
//Create Model
const Product = mongoose.model("Product", productSchema);
//exports module
module.exports = Product;
