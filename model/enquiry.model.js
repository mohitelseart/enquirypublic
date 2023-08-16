const mongoose = require("mongoose")

const enquirySchema = mongoose.Schema({
   name:String,
   email:String,
   phone:Number
},{
    versionKey:false
})

const enquiryModel = mongoose.model("enquirystoreddata", enquirySchema)

module.exports = {
    enquiryModel
}