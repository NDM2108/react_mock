import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemId = state.findIndex(
        (e) => e.product.id === action.payload.product.id
      );
      if (itemId !== -1) {
        state[itemId].quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    changeQuantity: (state, action) => {
      const itemId = state.findIndex((e) => e.product.id === action.payload.id);
      state[itemId].quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
