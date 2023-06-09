import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    navCategoryId: 0,
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers : {
        selectNavCategory(state, action) {
            state.navCategoryId = action.payload
        },
    }
})

export const { selectNavCategory, setPageRoadList } = navigationSlice.actions;
export default navigationSlice.reducer;