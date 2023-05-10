import React, { useState } from "react";
import animaimg from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImageBase64 } from "./ImageBase64";
import axios from "axios"
import {toast}from "react-hot-toast"
// import{REACT_APP_SERVER} =process.env.REACT_APP_SERVER
const Signup = () => {
  let navigate=useNavigate()
  const [showpassword, setshowpassword] = useState(false);
  // const [conformpassword, setconformpassword] = useState(false);
  const [inputs, setinputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    image:""
    // conformpassword: "",
  });
  const handleshowpass = () => {
    setshowpassword((prev) => !prev);
  };
  // const handleconformpassword = () => {
  //   setconformpassword((prev) => !prev);
  // };
  const handleonchange = (e) => {
    const { name, value } = e.target;
    setinputs((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleprofile=async(e)=>{
    const data=await ImageBase64(e.target.files[0])
    setinputs((preve)=>{
      return{
        ...preve,
      image:data
      }
    })
    console.log(inputs);
    // console.log(data);
  }
  const handlesubmit =async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = inputs;
    if (firstname && lastname && email && password) {

      const res=await axios.post("http://localhost:5000/signup",{
       firstname:String(inputs.firstname),
       lastname:String(inputs.lastname),
       email:String(inputs.email),
       password:String(inputs.password),
       image:String(inputs.image)
      }).catch((err)=>toast(err.response.data.message))
      const data= await res.data
      // console.log(data);
      if(data){
        navigate("/login")
        toast("Successfully Signup")
      }
      return data
    }
  };
  // console.log(inputs);
  return (
    <div className="p-3 md:4">
      <div className="w-full max-w-md bg-white m-auto flex flex-col p-4 ">
        {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md m-auto ralative">
          <img src={inputs.image?inputs.image: animaimg} alt={"error"} className="w-full h-full" />
          <label htmlFor="profileimg">
          <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
            <p className="text-sm p-1 text-white">Upload</p>
          </div>
          <input type={"file"} id="profileimg" accept="image/*" className="hidden" onChange={handleprofile} />
          </label>
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handlesubmit}>
          <label htmlFor="firstname" className="mt-2">First Name</label>
          <input
            onChange={handleonchange}
            value={inputs.firstname}
            type="text"
            id="firstname"
            name="firstname"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 focus-within:outline-blue-300"
          />
          <label htmlFor="fristname"className="mt-2">Last Name</label>
          <input
            onChange={handleonchange}
            value={inputs.lastname}
            type="text"
            id="lastname"
            name="lastname"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 focus-within:outline-blue-300"
          />
          <label htmlFor="email"className="mt-2">Email</label>
          <input
            onChange={handleonchange}
            value={inputs.email}
            type="email"
            id="email"
            name="email"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 focus-within:outline-blue-300"
          />
          <label htmlFor="password"className="mt-2">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-1 focus-within:outline focus-within:outline-blue-300">
            <input
              onChange={handleonchange}
              value={inputs.password}
              type={showpassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 px-2 py-1  rounded border-none outline-none "
            />
            <span
              className="flex text-xl mt-1 cursor-pointer"
              onClick={handleshowpass}
            >
              {showpassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          {/* conformpassword */}
          {/* <label htmlFor="conformpassword">Conform Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-1 focus-within:outline focus-within:outline-blue-300">
            <input
              value={inputs.conformpassword}
              type={conformpassword ? "text" : "password"}
              id="conformpassword"
              name="conformpassword"
              className="w-full bg-slate-200 px-2 py-1  rounded border-none outline-none "
            />
            <span
              className="flex text-xl mt-1 cursor-pointer"
              onClick={handleconformpassword}
            >
              {conformpassword ? <BiShow /> : <BiHide />}
            </span>
          </div> */}
          <button className="mt-4 text-xl  max-w[150px] m-auto w-60 py-1 rounded-full text-center bg-red-500 hover:bg-red-600 cursor-pointer">
            Signup
          </button>
        </form>
        <p className="items-left text-sm mt-2">
          Already have account ?
          <Link to={"/login"} className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
