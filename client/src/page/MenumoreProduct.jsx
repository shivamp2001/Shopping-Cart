import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import Cartfeature from './Cartfeature'
import { useSelector } from 'react-redux'

const MenumoreProduct = ({heading}) => {
  const productData=useSelector((state)=>state.product.productList)
  const categoryList= [...new Set(productData.map((pro)=>pro.category))]
  const [datafilter,setdatafilter]=useState([])
  useEffect(()=>{
    setdatafilter(productData)
  },[productData])
  
  // console.log(datafilter);


  const handleFilter=(category)=>{
    const filter=productData.filter((pro)=>pro.category===category)
    setdatafilter(()=>{
      return[
         ...filter
      ]
    })
  }
  return (
    <div>
         <div className="my-5">

      <h2 className='font-bold text-2xl underline mb-4 px-3 '>{heading}</h2> 
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-hidden">
        { categoryList[0] && categoryList.map((pro)=>{
          
          return(
            <FilterProduct  category={pro}onClick={()=>handleFilter(pro)}/>
          )
        })
        }
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-4">
         {
          datafilter.map((product)=>{
            return(
                 <Cartfeature  key={product._id}  category={product.category} productname={product.productname}price={product.price} image={product.image} productID={product._id} />
            )
          })
         }
      </div>
      </div>

      <div className="">
       
      </div>
    </div>
  )
}

export default MenumoreProduct
