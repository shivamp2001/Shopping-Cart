import React, { useState } from 'react'
import animaimg from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import {toast}from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/userSlice';
const Login = () => {
  const navigate=useNavigate()
  const [showpassword, setshowpassword] = useState(false);
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
    // conformpassword: "",
  });
  const dispatch=useDispatch()
  const handleshowpass = () => {
    setshowpassword((prev) => !prev);
  };
  const handleonchange = (e) => {
    const { name, value } = e.target;
    setinputs((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const userData=useSelector(state=>state)
  const handlesubmit = async(e) => {
    e.preventDefault();
    const { email, password } = inputs;
    if ( email && password) {
      const res=await axios.post("http://localhost:5000/login",{
        email:String(inputs.email),
        password:String(inputs.password),
       }).catch((err)=>toast(err.response.data.message))
       const data= await res.data

       // console.log(userData);
       //  console.log(data);
       if(data){
         dispatch(login(data))
         navigate("/")
         toast("Login Seccessfull")
        }
        return data
      }
    };
  // console.log(inputs);
  return (
    <div className="p-3 md:4">
      <div className="w-full max-w-md bg-white m-auto flex flex-col p-4 ">
        {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md m-auto">
          <img src={animaimg} alt="error" className="w-full " />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handlesubmit}>
         
          <label htmlFor="email">Email</label>
          <input
            onChange={handleonchange}
            value={inputs.email}
            type="email"
            id="email"
            name="email"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 focus-within:outline-blue-300"
          />
          <label htmlFor="password" className='mt-2'>Password</label>
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
         
          <button className="mt-4 text-xl  max-w[150px] m-auto w-60 py-1 rounded-full text-center bg-red-500 hover:bg-red-600 cursor-pointer">
            Login
          </button>
        </form>
        <p className="items-left text-sm mt-2">
          Register new account ?
          <Link to={"/signup"} className="text-blue-500 underline">
            Signup
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login
