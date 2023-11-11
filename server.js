import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv"

import connectDB from "./config/db.js";
import authRoute from "./routers/authRoute.js";


dotenv.config();
const app = express();

//database config
connectDB();


//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth",authRoute);

app.get('/',(req,res)=>{
    res.send(
        "<h1>Hey I am awake</h1>")
    
})

const PORT=process.env.PORT || 8000;

//run
//back ` is used for making the message dynamic
app.listen(PORT,()=>{
    console.log(`Mera server hain bhai ,mode ${process.env.DEV_MODE} ,par run ho raha hain ${PORT} `.bgCyan.black);
    
})

