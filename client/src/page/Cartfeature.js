import React from 'react'
import { Link } from 'react-router-dom'
import { addcartitem } from '../Redux/ProductSlice' 
import { useDispatch } from 'react-redux'

const Cartfeature = ({productname,image,category,price,productID}) => {
    // console.log(productname,image,category,price);
    const dispatch=useDispatch()
    const handleAddcartProduct=(e)=>{
        dispatch(addcartitem({
          _id:productID,
          productname:productname,
          image:image,
          price:price,
          category:category
        }))
    }
  return (
    <div className='w-full min-w-[250px] max-w-[250px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col '>
      <Link to={`/menu/${productID}`} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
     <div className="h-28 flex flec-col justify-center item-center ">
        <img src={image} alt=""className='h-full' />
     </div>
     <h3 className='font-semibolt  capitalize text-lg mt-4 text-center whitespace-nowrap overflow-hidden'>{productname}</h3>
      <p className=' text-slate-400 text-center'>{category}</p>
      <p className=' font-bold mb-1'><span className='text-red-500'>₹</span> <span>{price}</span></p>
      </Link>
      <button className='bg-red-400 py-2 my-1 rounded hover:bg-red-500 w-full' onClick={handleAddcartProduct}>Add Cart</button>
    </div>
  )
}

export default Cartfeature
