import {createSlice} from "@reduxjs/toolkit";

const initialState={
    email: "",
    firstname: "",
    image: "",
    lastname: "",
    _id:""
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state._id=action.payload.user._id
            state.email=action.payload.user.email
            state.firstname=action.payload.user.firstname
            state.lastname=action.payload.user.lastname
            state.image=action.payload.user.image
//  console.log(action);
        },
        logout:(state,action)=>{
            state._id=""
            state.email=""
            state.firstname=""
            state.lastname=""
            state.image=""
        }
    }
})
export const {login} =userSlice.actions
export const {logout} =userSlice.actions
export default userSlice.reducer