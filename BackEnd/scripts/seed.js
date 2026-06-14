// Require dotenv
require("dotenv").config();
// Require Mongoose
const mongoose = require("mongoose");
// Admin Model
const Admin = require("../models/Admin");
// Create New Function (Server)
const seedSuperAdmin = async () => {
    try {
        // DB Connected
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Is Connected");
        // exist Admin
        const existAdmin = await Admin.findOne({
            email: process.env.ADMIN_EMAIL
        });
        if(existAdmin) return console.log("Already Found Admin");
        // Create New Admin
        const newAdmin = {
            userName: "Super Admin",
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD
        };
        const admin = await Admin.create(newAdmin);
        console.log(admin);
    } catch (error) {
        console.log(error);
    } finally{
        await mongoose.connection.close();
        console.log("DB Is Closed");
        process.exit(0);
    }
}
// Run Function
seedSuperAdmin();