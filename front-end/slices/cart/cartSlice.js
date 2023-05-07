import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    cart: [],
    status: false,
    price: 0
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, item) => {
      let foundItem = state.value.cart.find((i)=> i._id === item.payload._id)
      if (!foundItem) {
        state.value.cart.push(item.payload);
        state.value.price += item.payload.price
      }
    },
    remove: (state, item) => {
      let filteredCart = state.value.cart.filter(
        (i) => i._id !== item.payload._id
      );
      state.value.cart = filteredCart;
      state.value.price -= item.payload.price
    },
    close: (state)=>{
      state.value.status= false
    },
    modifyStatus: (state) => {
      state.value.status = !state.value.status;
    },
    emptyCart: (state) => {
      state.value.cart = [];
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, modifyStatus, emptyCart, close } = cartSlice.actions;

export default cartSlice.reducer;
