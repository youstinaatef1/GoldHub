//Call Mongoose
const { required } = require("joi");
const mongoose = require("mongoose");
//Create Schema
const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    role:{
        type: String,
        enum: ["admin", "user", "seller"],
        default: "user"
    }
}, {timestamps: true});
//Create Model
const User = mongoose.model("User", userSchema);
//exports module
module.exports = User;