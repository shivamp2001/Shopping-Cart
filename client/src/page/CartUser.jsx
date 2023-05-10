import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import emptyImg from "../assest/empty.gif"

const CartUser = () => {
  const productcartItems = useSelector((state) => state.product.cartItems);
  console.log(productcartItems);

const totalPrice=productcartItems.reduce((acc,curr)=>acc+parseInt(curr.total),0)
const totalQty=productcartItems.reduce((acc,curr)=>acc+parseInt(curr.qty),0)

  return (
    <>
    <div className="p-2  ">
      <h2 className="text-2xl font-bold text-slate-500 ">Your Cart Items</h2>
      { productcartItems[0] ?
      <div className="my-4 flex gap-3  ">
        <div style={{width:800}}>
          {productcartItems.map((product) => {
            return (
              <CartProduct
                key={product._id}
                productid={product._id}
                image={product.image}
                productname={product.productname}
                category={product.category}
                qty={product.qty}
                total={product.total}
                price={product.price}
              />
            );
          })}
        </div>
          
          <div style={{width:500}} className="  ml-auto">
            <h2 className="bg-blue-300 text-lg">Summary</h2>

            <div style={{borderBottom:"0.5px solid black"}} className="flex w-full py-2 text-lg ">
              <p>Total Qty  :</p>
              <p style={{marginLeft:60}} className="ml-20 font-bold">{totalQty}</p>
            </div>

            <div style={{borderBottom:"0.5px solid black"}} className="flex w-full py-2 text-lg ">
              <p>Total Price :</p>
              <p style={{marginLeft:35}} className="ml-20 font-bold"><span className="text-red-500">₹</span> {totalPrice}</p>
            </div>
            <button className="bg-red-400 w-full text-lg font-bold py-1 text-white rounded">Payment</button>
          </div>
      </div>
      :
      <>
      <div className="flex w-full justify-center items-center flex-col">
        <img src={emptyImg} alt="error" className="" style={{height:400}}/>
        <p className="text-3xl font-bold text-red-500">Your Cart is Empty</p>
        </div>
        </>
      }
    </div>
    </>
  );
};

export default CartUser;
