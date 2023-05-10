import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MenumoreProduct from './MenumoreProduct'
import { addcartitem } from '../Redux/ProductSlice' 

const Menu = () => {
  const {filter}=useParams()
  const dispatch=useDispatch()
  const productData=useSelector((state)=>state.product.productList)

  const productDisplay=productData.filter((pro)=>pro._id===filter)[0]
  // console.log(productDisplay);
  const handleAddcartProduct=(e)=>{
    dispatch(addcartitem(productDisplay))
}
  return (
    <div className='p-6 '>
      <div className="w-[650px] h-15 max-w-4xl  m-auto flex bg-white ">
         <div className="w-[300px] min-w-[300px]  overflow-hidden h-[350px] ">
          <img src={productDisplay.image} alt="" className='hover:scale-105 transition-all h-[350px] w-full' />
         </div>
         <div className="flex flex-col gap-2 px-3">
         <h3 className='font-semibolt t capitalize text-2xl'>{productDisplay.productname}</h3>
      <p className=' text-slate-400 text-2xl'>{productDisplay.category}</p>
      <p className=' font-bold text-2xl'><span className='text-red-500'>₹</span> <span>{productDisplay.price}</span></p>
         <div className="flex gap-3">
      <button className='bg-red-400 py-2 my-1 rounded hover:bg-red-500 px-5 py-2 min-w-[100px]'>Buy</button>
      <button className='bg-red-400 py-2 my-1 rounded hover:bg-red-500 px-5 py-2 min-w-[100px]' onClick={handleAddcartProduct}>Add Cart</button>
         </div>
         <div className="">
          <p className='font-bold'>Description:</p>
          <p>{productDisplay.description}</p>
         </div>
         </div>
      </div>

      <div className="">
      <MenumoreProduct heading={"Related Products"}/>
      </div>
    </div>
  )
}

export default Menu
