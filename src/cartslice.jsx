import { createSlice } from "@reduxjs/toolkit"
const Cartslice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
addtocart:(state,action)=>{
    state.cart.push(action.payload)
}
    }

})
export const {addtocart}=Cartslice.actions
export default Cartslice.reducer;