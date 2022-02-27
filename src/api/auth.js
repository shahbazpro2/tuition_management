import { createAsyncThunk } from "@reduxjs/toolkit"
import responseApi from "./responseApi"
import { getUsersUrl, getUserUrl, loginUserUrl, registerUserUrl } from "./apiUrls"


export const registerUserApi = async (data) => {
    return responseApi(registerUserUrl, 'post', data)
}

export const loginUserApi = (data) => {
    return responseApi(loginUserUrl, 'post', data, false)
}

export const getUsersApi = () => {
    return responseApi(getUsersUrl, 'get')
}

export const getUserApi = createAsyncThunk("auth/getUserApi", async () => {
    return await responseApi(getUserUrl, 'get')
})