import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/newlogo.png";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/userSlice";
import {toast}from "react-hot-toast"
const Header = () => {
  const dispatch=useDispatch()

const cartItemNumber=useSelector((state)=>state.product.cartItems)
// console.log(cartItemNumber);

  const [showmenu, setshowmenu] = useState(false);
  const userData=useSelector(state=>state)
  // console.log(userData.user.email);
  const handleshowmenu=()=>{
setshowmenu((preve)=>!preve)
  }
  const handlelogout=()=>{
  dispatch(logout())
  toast("Logout Successfull")
  }
  return (
    <header className=" fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* Desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10 ">
            <img src={logo} alt="error" className={"h-full"} />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 mb:gap-7 text-base md:text-lg">
            <Link to={""} className="hover:bg-slate-300">Home</Link>
            <Link to={"menu/642933adfcfbb7e7e22320ca"} className="hover:bg-slate-300">Menu</Link>
            <Link to={"about"} className="hover:bg-slate-300">About</Link>
            <Link to={"contact"} className="hover:bg-slate-300">Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative cursor-pointer">
           <Link to={"mycart"}><FaShoppingCart />
            <div className="absolute -top-1 -right-1 text-white bg-red-500  h-4 w-4 rounded-full m-0 p-0 text-sm text-base text-center ">
              {cartItemNumber.length}
            </div>
            </Link>
          </div>
          <div className=" text-slate-600"onClick={handleshowmenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md" >
              {userData.user.image?<img src={userData.user.image} alt="err" className="w-full h-full"/>:<HiOutlineUserCircle />
                 }
            </div>
            {showmenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                {
                   process.env.REACT_APP_ADMIN_EMAILID===userData.user.email&&<Link to={"addproduct"} className="cursor-pointer">New Product</Link>
                }
                {userData.user.image? <p className="cursor-pointer text-red-500" onClick={handlelogout}>Logout  ({userData.user.firstname})</p>:<Link to={"login"} className="cursor-pointer px-2 py-1">Login</Link>} 
                <nav className="flex mb:gap-7 text-base md:text-lg flex flex-col md:hidden">
            <Link to={""} className="px-2 py-1">Home</Link>
            <Link to={"menu/642933adfcfbb7e7e22320ca"} className="px-2 py-1">Menu</Link>
            <Link to={"about"} className="px-2 py-1">About</Link>
            <Link to={"contact"} className="px-2 py-1">Contact</Link>
          </nav>     
              </div>
              
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
    </header>
  );
};

export default Header;
