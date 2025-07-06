import { configureStore } from "@reduxjs/toolkit";
import cartreducer from  "./cartslice"
const Store=configureStore({
    reducer:{
        mycart:cartreducer
    }
})
export default Store;