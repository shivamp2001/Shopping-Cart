const express=require("express");
const { createProduct, getallProduct } = require("../Controller/product");
const { signup, login } = require("../Controller/user");
const router=express.Router();


router.post("/signup",signup)
router.post("/login",login)

// products
router.post("/addproduct",createProduct)
router.get("/getallproduct",getallProduct)


module.exports=router