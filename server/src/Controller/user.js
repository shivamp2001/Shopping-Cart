const User=require("../Model/user")

exports.signup = async (req, res) => {
  try {
    let data=req.body
    const {email}=data
    const checkEmail=await User.findOne({email:email})
    // console.log(checkEmail);
    if(!checkEmail){
      
     let user=await User.create(data)
       return res.status(201).json({user:user,message:"successfully signup"})
    } else{
      return res.status(400).json({message:"These Email id Already Registered"})
    }
  
  } catch (err) {
    return res.status(500).json({error:err.message})

  }
};


exports.login=async(req,res)=>{
 try{
  const {email,password}=req.body
  const checkEmailandPassword= await User.findOne({email,password})
  // console.log(checkEmailandPassword);
  if(!checkEmailandPassword)return res.status(400).json({message:"Email/Password is Invalid"})
  return res.status(200).json({user:checkEmailandPassword,message:"Login successfull"})

 }catch(err){
  return res.status(500).json({error:err.message})
 }
}