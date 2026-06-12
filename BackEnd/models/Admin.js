const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { type } = require("../controllers/validation/registerSchema");
const { required } = require("joi");
const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "UserName is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"]
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: 6,
        select: false
    }
}, {timestamps: true});
adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);  
});
adminSchema.methods.comparePassword = async function (matchedPassword) {
    return await bcrypt.compare(matchedPassword, this.password);  
};
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;