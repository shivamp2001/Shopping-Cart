
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import toast, {Toaster}from "react-hot-toast"
import { useEffect } from 'react';
import {setDataproduct} from "./Redux/ProductSlice"
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const productData=useSelector((state)=>state.product)
  const dispatch=useDispatch()
  useEffect(()=>{
    (async()=>{
      const res=await fetch("http://localhost:5000/getallproduct")
      const resData=await res.json()
      // console.log(resData);
      dispatch(setDataproduct(resData))
    })()
  },[])
  // console.log(productData);
  return (
    <>
    <Toaster />
    <div >
   <Header/>
   <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
    <Outlet/>
   </main>
    </div>
    </>
  );
}

export default App;
