const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({

    productname:{type:String},
    category:{type:String},
    price:{type:String},
    image:{type:String},
    description:{type:String},
},{timestamps:true})

module.exports=mongoose.model("product",productSchema)