import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total:0,
  },
  reducers: {
    setProducts: (state, action) => {
      console.log(action.payload)
      state.products = action.payload;
      
    },
    settotal:(state ,action)=>{
        state.total=action.payload
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

export const { setProducts, addProduct, removeProduct ,settotal} = cartSlice.actions;
export default cartSlice.reducer;
