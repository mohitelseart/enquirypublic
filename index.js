const express=require("express")
const {connection}=require("./db")
const {enquiryRouter}=require("./routes/enquiry.routes")
const cors=require("cors")
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.end("enquiry data is here")
})

app.use("/enquiry",enquiryRouter)
 
app.listen(process.env.port,async()=>{
    try{
       await connection
       console.log("connected to db")
    }
    catch(err){
         console.log(err.message)
    }
    console.log(`server running at ${process.env.port}`)
})