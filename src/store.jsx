import { configureStore } from "@reduxjs/toolkit";
import cartreducer from  "./pages/cartslice";
const Store=configureStore({
    reducer:{
        mycart:cartreducer
    }
})
export default Store;