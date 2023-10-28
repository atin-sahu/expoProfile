import { createSlice } from "@reduxjs/toolkit";

export const initProjectForm = {
    projectName: '',
    startDate: '',
    endDate: '',
    gitUrl: '',
    liveUrl: '',
    techStack: [],
    description: '',
}

const projectSlice = createSlice({
    name: "projectSlice",
    initialState: {
        projectForm: initProjectForm,
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
        }),
        updateProjectForm:((state,action) => {
            state.projectForm = action.payload
        })
    },
});

export const {
    updateProjects,
    updateIsAdd,
    updateProjectForm,
} = projectSlice.actions;
export default projectSlice.reducer;
