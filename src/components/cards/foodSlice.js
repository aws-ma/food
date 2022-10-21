import { createSlice } from "@reduxjs/toolkit";
import { food } from "../../data/fakeData";

const initialState = food;
const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state[action.payload.category][action.payload.meal] = {
                ...state[action.payload.category][action.payload.meal],
                ordered: true,
            };
        },
        disordered: (state, action) => {
            state[action.payload.category][action.payload.meal] = {
                ...state[action.payload.category][action.payload.meal],
                ordered: false,
                quantity: 1,
            };
        },
        changeQuantity: (state, action) => {
            state[action.payload.category][action.payload.meal] = {
                ...state[action.payload.category][action.payload.meal],
                quantity:
                    Math.max(state[action.payload.category][action.payload.meal]
                        .quantity + action.payload.number,0),
            };
        },
    },
});

export default foodSlice.reducer;
export const { ordered, disordered, changeQuantity } = foodSlice.actions;
