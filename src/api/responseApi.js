/* eslint-disable no-undef */
import axios from "axios"
import objectToArray from "utils/objectToArray"
const CancelToken = axios.CancelToken
export let cancelRequest

axios.defaults.baseURL = process.env.REACT_APP_API;

const responseApi = async (url, method, data, header = true) => {
    if (!navigator.onLine)
        return {
            error: true,
            data: ["Oops! You're offline. Please check your network connection..."]
        }

    let token = localStorage.getItem('x-access-token')

    let config = {
        "x-access-token": token || null,
    }

    try {
        const res = await axios({
            method,
            url,
            data,
            headers: header ? config : {},
            cancelToken: new CancelToken(function executor(c) {
                cancelRequest = c;
            })
        })

        if (res?.data)
            return { error: false, status: res.status, data: res.data.data, message: res.data.message }
    } catch (err) {
        let data
        if (err.response?.status === 404 || err.response?.status === 500) {
            data = { status: err.response?.status, message: ['Something went wrong.'] }
        }
        else if (err.message === "Network Error") {
            data = { status: 408, message: ['Server is not responding.'] }
        } else
            data = { status: err.response?.status, message: objectToArray(err.response?.data?.message) }


        return { error: true, ...data, data: null }
    }

}

export default responseApi
