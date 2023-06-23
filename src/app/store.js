import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "../features/authenticate/authenticateSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    authenticate: authenticateReducer,
    cart: cartReducer,
  },
});

export default store;
