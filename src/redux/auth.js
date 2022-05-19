import { createSlice } from "@reduxjs/toolkit";
import { getUserApiThunk } from "../api/auth";
import { url_login } from "utils/pageUrls";


const initialState = {
    user: {}
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserState: (state, action) => {
            state.user = action.payload
        },
        setLogoutState: (state) => {
            localStorage.removeItem('token')
            window.location.replace(url_login)

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserApiThunk.fulfilled, (state, { payload }) => {
            if (!payload.error) {
                state.user = payload.data
            } else {
                if (payload.error && payload.status === 401) {
                    state.user = {}
                    localStorage.removeItem('token')
                }
                state.user = {}
            }
        })
    },
})

export const {
    setUserState,
    setLogoutState,
} = authSlice.actions;

export default authSlice.reducer;