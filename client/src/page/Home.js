import React, { useRef} from 'react'
import HomeCard from './HomeCard'
import {useSelector} from "react-redux"
import Cartfeature from './Cartfeature'
import {GrPrevious,GrNext} from "react-icons/gr"
// import FilterProduct from './FilterProduct'
// import { useEffect } from 'react'
import MenumoreProduct from './MenumoreProduct'


const Home = () => {
  const productData=useSelector((state)=>state.product.productList)
  // console.log(productData);
  const homepageproduct=productData.slice(0,4)

  const filterProductlist=productData.filter((pro)=>pro.category==="watch")

  const SliideRef=useRef()

const next=()=>{
  SliideRef.current.scrollLeft+=200
 }
const prev=()=>{
  SliideRef.current.scrollLeft-=200
 }


  return (
    <div className='p-2 mb:p-4'>
      <div className="flex py-3 gap-4">
        <div className="w-1/2 ">
          {/* <div  className="flex gap-3 bg-red-400 w-36 px-2 items-center rounded-full ">
            <p  className="text-sm font-medium ">Bike Delivery</p>
            <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="" className='h-7' />
          </div> */}
          <h2 className='text-4xl font-bold text-7xl py-3' >Fastes delivery in <span className='text-red-500'>Your Home</span></h2>
          <p className='p-3 text-base max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat saepe sint, quod eveniet eaque magni corrupti ex sunt similique. Velit possimus id eligendi unde officiis. Reiciendis omnis, quaerat, voluptate explicabo facere totam asperiores animi ea reprehenderit vero sed voluptas!</p>
          <button className='text-bold bg-red-400 p-2 rounded-full'>Order Now</button>
        </div>

        <div className="w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {
            homepageproduct[0]&& homepageproduct.map((product)=>{
              return(

                <HomeCard key={product._id} image={product.image} productname={product.productname} price={product.price} category={product.category} productID={product._id} />
              )
            })
          }
        </div>
      </div>
      <div className=" ">
        <div className='w-full flex items-center'>
        <h2 className='font-bold text-2xl underline mb-4 '>Hot Items</h2>
        <div className="ml-auto">
          <button className='bg-slate-300 hover:bg-slate-400 text-lg p-1 m-2 rounded' onClick={prev}><GrPrevious/></button>
          <button className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded' onClick={next}><GrNext/></button>
        </div>
        </div>
      
      <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"ref={SliideRef}>
        {
          filterProductlist.map((product)=>{
            return(

              <Cartfeature key={product._id} productname={product.productname} category={product.category} price={product.price} image={product.image} productID={product._id} />
            )
          })
        }
      </div>
      </div>

      {/* <div className="my-5">
      <h2 className='font-bold text-2xl underline mb-4 '>fresh vagitables</h2> 

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
      </div> */}
      <MenumoreProduct heading={"products"}/>
    </div>
  )
}

export default Home
