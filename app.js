// DotEnv
require("dotenv").config();
// Express
const express = require("express");
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
//Listen
app.listen(port, () =>{
    console.log(`Server Is Running At Port ${port}`);
});