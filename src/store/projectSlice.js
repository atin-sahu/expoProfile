import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "projectSlice",
    initialState: {
        loading: false,
        projects: [],
        isAdd:false,
    },
    reducers: {
        updateProjects:((state, action) => {
            state.projects = action.payload;
        }),
        updateIsAdd:((state,action) => {
            state.isAdd = action.payload
        })
    },
});

export const {
    updateProjects,
    updateIsAdd,
} = projectSlice.actions;
export default projectSlice.reducer;
