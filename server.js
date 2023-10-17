import express from "express";
import colors from "colors";
import dotenv from "dotenv"
const app=express();


dotenv.config();

app.get('/',(req,res)=>{
    res.send(
        "<h1>Hey I am awake</h1>")
    
})

const PORT=process.env.PORT || 8080;

//run
//back ` is used for making the message dynamic
app.listen(PORT,()=>{
    console.log(`Mera server hain bhai ,mode ${process.env.DEV_MODE} ,par run ho raha hain ${PORT} `.bgCyan.black);
    console.log(`Fuck you Bitch`.bgCyan.black);
})

app.listen(c,()=>{
      console.log("okiesh")
})
 


