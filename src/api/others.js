import { othersUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createOtherApi = async (data) => {
    return responseApi(othersUrl, 'post', data)
}

export const getOthersApi = async () => {
    return responseApi(`${othersUrl}/all`, 'get')
}

export const getOtherApi = async (id) => {
    return responseApi(`${othersUrl}?id=${id}`, 'get')
}

export const updateOtherApi = async (id, data) => {
    return responseApi(`${othersUrl}?id=${id}`, 'put', data)
}

export const deleteOtherApi = async (id) => {
    return responseApi(`${othersUrl}?id=${id}`, 'delete')
}