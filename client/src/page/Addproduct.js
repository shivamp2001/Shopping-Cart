import React, { useState } from "react";
import { GrUpload } from "react-icons/gr";
import { ImageBase64 } from "./ImageBase64";
import axios from "axios"
import{toast} from"react-hot-toast"
import {  useNavigate } from "react-router-dom";

const Addproduct = () => {
  const navigate=useNavigate()
  const [inputs, setInputs] = useState({
    productname: "",
    category: "",
    price: "",
    image: "",
    description: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setInputs((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadImage = async (e) => {
    const data = await ImageBase64(e.target.files[0]);
    setInputs((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
    //  console.log(data);
  };
  const saveDatabase=async()=>{
    const{productname,category,price,image,description}=inputs
    if(productname&&category&&price&&image&&description){

   
    const res=await axios.post("http://localhost:5000/addproduct",{
      productname:String(inputs.productname),
      category:String(inputs.category),
      price:String(inputs.price),
      image:String(inputs.image),
      description:String(inputs.description),
    }).catch(err=>console.log(err))
    const data= await res.data
    // console.log(data);
    if(data){
      toast("Product Added")
    }
    // navigate("/")
    return data
    
  }
  }
  
  const handlesubmit = (e) => {
    // console.log(inputs);
    e.preventDefault();
    saveDatabase()

    
  };
  return (
    <div className="p-4">
      <form
        className=" m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white"
        onSubmit={handlesubmit}
      >
        <label htmlFor="productname">Product Name: </label>
        <input
          type="text"
          name="productname"
          className="bg-blue-200 p-1 my-1"
          onChange={handlechange}
        />

        <label htmlFor="category" className="my-2">
          Category
        </label>
        <select
          name="category"
          className="my- p-1  bg-blue-200"
          id="category"
          onChange={handlechange}
        >
          <option value={"other"}>Select Category</option>
          <option value={"watch"}>watch</option>
          <option value={"mobile"}>Mobiles</option>
          <option value={"tv"}>Tv</option>
          <option value={"shoes"}>Shoes</option>
          <option value={"cloth"}>cloth</option>
          <option value={"headphon"}>Headphone</option>
        </select>
        <label htmlFor="price" className="my-2">
          Price
        </label>
        <input
          type="text"
          className="bg-blue-200 p-1 my-1"
          name="price"
          onChange={handlechange}
        />

        {/*Images  */}
        <label htmlFor="image" className="my-1 cursor-pointer">
          Image
          <div className="h-40 w-full bg-blue-300 my-3 rounded flex items-center justify-center">
            {inputs.image ? (
              <img src={inputs.image} alt="" className="h-full w-full" />
            ) : (
              <span className="text-4xl cursor-pointer">
                <GrUpload />
              </span>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden cursor-pointer"
              id="image"
              name="image"
              onChange={handleUploadImage}
            />
          </div>
        </label>

        <label htmlFor="description">description</label>
        <textarea
          rows={2}
          className="bg-blue-200 p-1 my-1 resize-none"
          name="description"
          onChange={handlechange}
        ></textarea>
        <button className="my-2 bg-blue-300 hover:bg-blue-600 text-white text-lg drop-shadow font-md">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
