import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: [] };
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.value.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const indexObj = state.value.findIndex(({ category, meal }) => {
                return (
                    category === action.payload.category &&
                    meal === action.payload.meal
                );
            });
            state.value.splice(indexObj, 1);
        },
    },
});
export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
