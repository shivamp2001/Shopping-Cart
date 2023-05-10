import React from 'react'
import {BsFilterSquare} from "react-icons/bs"
const FilterProduct = ({category,onClick}) => {
  return (
    <div onClick={onClick}>
    <div className="text-3xl p-4 rounded-full bg-red-400 cursor-pointer">
          <BsFilterSquare/>
        </div>
        <p className='text-center font-medium my-1 capitalize'>{category}</p>
        </div>
  )
}

export default FilterProduct
