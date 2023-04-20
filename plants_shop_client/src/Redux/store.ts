import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./Cart/cartSlice";
import productsReducer from "./Products/productsSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
});

export default store;