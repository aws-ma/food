import { createSlice } from "@reduxjs/toolkit";
import { food } from "../../data/fakeData";
const initialState = { value: food[0], categoryIndex: 0 }; //re
const categoriesSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.value = action.payload.value;
            state.categoryIndex = action.payload.categoryIndex;
            // console.log("state", state);
        },
    },
});

export default categoriesSlice.reducer;
export const { changeCategory } = categoriesSlice.actions;
