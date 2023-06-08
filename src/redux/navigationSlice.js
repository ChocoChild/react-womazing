import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers : {
        selectCategory(state, action) {
            state.categoryId = action.payload
        }
    }
})

export const { selectCategory } = navigationSlice.actions;
export default navigationSlice.reducer;