import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
    name: "educationSlice",
    initialState: {
        loading: false,
        institutes: [],
    },
    reducers: {
        updateInstitutes:((state, action) => {
            state.institutes = action.payload;
        })
    },
});

export const {
    updateInstitutes
} = educationSlice.actions;
export default educationSlice.reducer;
