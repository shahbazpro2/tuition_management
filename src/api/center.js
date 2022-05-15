import { centerUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createCenterApi = async (data) => {
    return responseApi(centerUrl, 'post', data)
}

export const getCentersApi = async () => {
    return responseApi(`${centerUrl}/all`, 'get')
}

export const getCenterApi = async (id) => {
    return responseApi(`${centerUrl}?id=${id}`, 'get')
}

export const updateCenterApi = async (id, data) => {
    return responseApi(`${centerUrl}?id=${id}`, 'put', data)
}

export const deleteCenterApi = async (id) => {
    return responseApi(`${centerUrl}?id=${id}`, 'delete')
}

