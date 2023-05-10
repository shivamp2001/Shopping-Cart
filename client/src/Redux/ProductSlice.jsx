import {createSlice}from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"

const initialState={
    productList:[],
    cartItems:[]
}

export const productslice=createSlice({
    name:"product",
    initialState,
    reducers:{
        setDataproduct:(state,action)=>{
            //   console.log(action)
            state.productList=[...action.payload.data]
        },
        addcartitem:(state,action)=>{
            const ckeckitemincart=state.cartItems.some(pro=>pro._id===action.payload._id)
            if(ckeckitemincart){
                toast("Item Already in Cart")
            }else{
                toast("Item Add in Cart")
                const total=action.payload.price
                state.cartItems=[...state.cartItems,{...action.payload,qty:1,total:total}]
            }
            
            // console.log(action);
        },
        deletecartitem:(state,action)=>{
            toast("Item is Deleted")
            const index=state.cartItems.findIndex((pro)=>pro._id===action.payload)
            state.cartItems.splice(index,1)
            console.log(index);
        },
        increaseqty:(state,action)=>{
            let index=state.cartItems.findIndex((pro)=>pro._id===action.payload)
            let qty=state.cartItems[index].qty
            let qtyInc=++qty
            state.cartItems[index].qty=qtyInc

            let price=state.cartItems[index].price
            let total=price*qtyInc
            state.cartItems[index].total=total

        },
        decreaseqty:(state,action)=>{
            let index=state.cartItems.findIndex((pro)=>pro._id===action.payload)
            let qty=state.cartItems[index].qty
            if(qty>1){
                let qtyDec=--qty
                state.cartItems[index].qty=--qty
                let price=state.cartItems[index].price
            let total=price*qtyDec
            state.cartItems[index].total=total
            }
        },
    }

})

export const {setDataproduct,addcartitem,deletecartitem ,increaseqty,decreaseqty}=productslice.actions

export default productslice.reducer