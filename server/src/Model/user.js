const mongoose=require("mongoose");
const signupSchema=new mongoose.Schema({
 
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    password:{type:String},
    image:{type:String}
},{timestamps:true})

module.exports=mongoose.model("user",signupSchema)