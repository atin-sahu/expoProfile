import { createSlice } from "@reduxjs/toolkit";

export const initSkillForm = {
    title: '',
    proficiency: '',
    imageUrl: '',
}

const skillSlice = createSlice({
    name: "skillSlice",
    initialState: {
        skillForm: initSkillForm,
        loading: false,
        skills: [],
        isAddSkill:false,
    },
    reducers: {
        updateSkills:((state, action) => {
            state.skills = action.payload;
        }),
        updateIsAddSkill:((state,action) => {
            state.isAddSkill = action.payload
        }),
        updateSkillForm:((state,action) => {
            state.skillForm = action.payload
        })
    },
});

export const {
    updateSkills,
    updateIsAddSkill,
    updateSkillForm,
} = skillSlice.actions;
export default skillSlice.reducer;
