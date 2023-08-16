const express=require("express")
const {enquiryModel}=require("../model/enquiry.model")

const enquiryRouter=express.Router()

enquiryRouter.get("/",async(req,res)=>{
    const data=await enquiryModel.find()
    res.send(data)
})

enquiryRouter.post("/send",async(req,res)=>{
    const payload=req.body
    const client=new enquiryModel(payload)
    await client.save()
    res.send({"msg":"enquiry request submitted"})
})

enquiryRouter.patch('/update/:id',async(req,res)=>{
    const payload=req.body
    const data=req.params.id
    await enquiryModel.findByIdAndUpdate({_id:data},payload)
    res.send({"msg":`requirement with id :${data} has been updated`})

})

enquiryRouter.delete('/delete/:id',async(req,res)=>{
    const data=req.params.id
    await enquiryModel.findByIdAndDelete({_id:data})
    res.send({"msg":`Note with id:${data} has been deleted`})
})

module.exports={
    enquiryRouter
}