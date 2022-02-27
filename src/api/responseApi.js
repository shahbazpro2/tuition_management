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

    let token = localStorage.getItem('token')

    let config = {
        authorization: token && `Token ${token}`,
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
            return { error: false, status: res.status, data: res.data }
    } catch (err) {
        let data
        if (err.response?.status === 404 || err.response?.status === 500) {
            data = { status: err.response?.status, data: ['Something went wrong.'] }
        }
        else if (err.message === "Network Error") {
            data = { status: 408, data: ['Server is not responding.'] }
        } else
            data = { status: err.response?.status, data: objectToArray(err.response?.data) }


        return { error: true, ...data }
    }

}

export default responseApi
