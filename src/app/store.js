import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../components/cards/foodSlice";
import categoriesReducer from "../components/categories/categoriesSlice";
import cartReducer from "../components/cart/cartSlice";
export const store = configureStore({
    reducer: {
        food: foodReducer,
        category: categoriesReducer,
        cart: cartReducer,
    },
});
