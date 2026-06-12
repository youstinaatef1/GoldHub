// DotEnv
require("dotenv").config();
// Express
const express = require("express");
// bcrypt
const bcrypt = require("bcrypt");
const morgan = require("morgan");
const app = express();
//Middleware
app.use(express.json());
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("combined"));
}
app.use("/uploads", express.static("uploads"));
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
const connectedDB = require("./config/db");
connectedDB();
const User = require("./models/User");
const Product = require("./models/Product");
const Shop = require("./models/Shop");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const shopRoutes = require("./routes/shopRoutes");
const adminRoutes = require("./routes/authAdminRoutes");

app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", shopRoutes);
app.use("/api/dashboard", adminRoutes);
//Listen
app.listen(port, () =>{
    console.log(`Server Is Running At Port ${port}`);
});