import React from "react";
import {BsFillCartPlusFill} from "react-icons/bs"
import {AiFillMinusCircle} from "react-icons/ai"
import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { deletecartitem, increaseqty ,decreaseqty} from "../Redux/ProductSlice";

const CartProduct = ({
  image,
  qty,
  total,
  productid,
  productname,
  category,
  price,
}) => {
  // console.log(image,qty,total,productid,productname,category,price);
  const dispatch=useDispatch()
  return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded my-0.5" style={{border:"1px solid gray"}}>
      <div className="p-3 bg-white  rounde overflow-hidden ">
        <img src={image} alt="error" className="h-28 w-36 object-cover p-3"/>
      </div>
      <div className="flex flex-col gap-2 px-3 w-full">
        <div className="flex justify-between">
         <h3 className='font-semibolt t capitalize text-1xl'>{productname}</h3>
        <div className="cursor-pointer text-blue-500 text-2xl"  onClick={()=>dispatch(deletecartitem(productid))}>
        <MdDelete/>
        </div>
        </div>
      <p className=' text-slate-400 text-1xl'>{category}</p>
      <p className=' font-bold text-1xl'><span className='text-red-500'>₹</span> <span>{price}</span></p>

      <div className="flex justify-between">
         <div className="flex gap-3 items-center">
      <button className='bg-red-400 py-2 my-1 rounded hover:bg-red-500 px-5 py-2 min-w-[100px] text-2xl fustify-center' onClick={()=>dispatch(increaseqty(productid))}><BsFillCartPlusFill/></button>
      <p className="font-semibold p-1">{qty}</p>
      <button onClick={()=>dispatch(decreaseqty(productid))} className='bg-red-400 py-2 my-1 rounded hover:bg-red-500 px-5 py-2 min-w-[100px] text-2xl'><AiFillMinusCircle/></button>
         </div>
         <div className="flex items-center gap-2 font-bold">
           <p>Total :</p>
           <p className=" text-red-500">₹ {total}</p>
         </div>
         </div>
         
         </div>
    </div>
  );
};

export default CartProduct;
