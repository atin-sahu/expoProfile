import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        loading: false,
        phone: '',
    },
    reducers: {
        setNumber:((state, action) => {
            state.phone = action.payload;
        })
    },
});

export const {
    setNumber
} = authSlice.actions;
export default authSlice.reducer;
