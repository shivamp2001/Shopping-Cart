import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({image,productname,price,category,productID}) => {
    // console.log(image,productname,price,category);
  return (
    <div className='bg-white shadow p-2 rounded'>
       <Link to={`/menu/${productID}`} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
      <div className="w-40 min-h-[150px]">
        <img src={image} alt="" className='w-40 h-40'/>
      </div>
      <h3 className='font-semibolt text-center capitalize text-lg'>{productname}</h3>
      <p className='text-center text-slate-400'>{category}</p>
      <p className='text-center font-bold'><span className='text-red-500'>₹</span> <span>{price}</span></p>
      </Link>
    </div>
  )
}

export default HomeCard
