import { createSlice } from "@reduxjs/toolkit";
const cartSlice= createSlice({
    name:"addtocart",
    initialState:{
        cart:[]
    },
    reducers:{
      addtoCart:(state, actions)=>{            
     const myData= state.cart.filter(key=>key.id==actions.payload.id)
           if (myData.length>=1)
           {
            alert("Product Aleready Added!!!");
           }
           else 
           {
             state.cart.push(actions.payload);
           }
        } ,
        qntyIncrease:(state, actions)=>{
             for (var i=0; i<state.cart.length; i++)
             {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
             }
        },
        qntyDecrease:(state, actions)=>{
             for (var i=0; i<state.cart.length; i++)
             {
                if (state.cart[i].id==actions.payload.id)
                {
                     if (state.cart[i].qnty<=1)
                     {
                        alert("Quantity 1 or more than 1");
                     }
                     else 
                     {
                         state.cart[i].qnty--;
                     }
                   
                }
             }
        },
        dataRemove:(state, actions)=>{
            state.cart= state.cart.filter(item=>item.id!=actions.payload.id);
        }
    }
})
export const {addtoCart, qntyIncrease, qntyDecrease, dataRemove} = cartSlice.actions;
export default cartSlice.reducer;