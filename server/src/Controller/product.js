const ProductModel=require("../Model/product")

exports.createProduct=async(req,res)=>{
try{
    const{productname,price,category,image,description}=req.body
    const saveData=await ProductModel.create(req.body)
    return res.status(201).json({data:saveData,message:"Product Created Successfully"})

}catch(err){
return res.status(500).json({errr:err.message})
}

}

exports.getallProduct=async(req,res)=>{
try{
    const productData=await ProductModel.find()
    // console.log(productData);
    return res.status(200).json({data:productData,message:"data fetch successfully"})
    
}catch(err){
    return res.status(500).json({error:err.message})

}
}