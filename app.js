// DotEnv
require("dotenv").config();
// Express
const express = require("express");
// bcrypt
const bcrypt = require("bcrypt");
const app = express();
//Middleware
app.use(express.json());
//Port
const port = process.env.PORT || 3000;
//MONGOOSE
const mongoose = require("mongoose");
//DB Connection
async function dbConnection() {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected");
    }
    catch(error){
        console.log(error);
    }
}
dbConnection();
const User = require("./models/User");
const Product = require("./models/Product");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
app.use("/api", authRoutes);
app.use("/api", productRoutes);
//Listen
app.listen(port, () =>{
    console.log(`Server Is Running At Port ${port}`);
});