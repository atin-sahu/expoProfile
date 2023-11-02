import { createSlice } from "@reduxjs/toolkit";

const initUserPersionalForm = {
    name:'',
    designation:'',
    address:''
}

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        loading: false,
        user: {},
        isEdit:false,
        userPersionalForm:initUserPersionalForm,
    },
    reducers: {
        setUser:((state, action) => {
            state.user = action.payload;
        }),
        setIsEdit:(state,action) => {
            state.isEdit = action.payload
        },
        updateUserPersionalForm:(state,action)=>{
            state.userPersionalForm = action.payload
        }
    },
});

export const {
    setUser,
    setIsEdit,
    updateUserPersionalForm
} = userSlice.actions;
export default userSlice.reducer;
