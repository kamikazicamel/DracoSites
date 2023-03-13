import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        username: '',
        sub: '',
        email: '',
    },
    reducers:{
        loadUsername: (state, action) => {
            state.username = action.payload;
        },
        loadSub: (state, action) => {
            state.sub = action.payload;
        },
        loadEmail: (state, action) => {
            state.email = action.payload;
        },
        clearUser:(state) => {
            state.username = '';
            state.email = '';
            state.sub = '';
        },
    },
})

export const { loadUsername, loadSub, loadEmail, clearUser } = userSlice.actions

export default userSlice.reducer