import {configureStore}from "@reduxjs/toolkit";
import userSlicereducer from '../Redux/userSlice'
import  productslice  from "./ProductSlice";
export const store=configureStore({
    reducer:{
        user:userSlicereducer,
        product:productslice
    }
})