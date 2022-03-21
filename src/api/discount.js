import { discountUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createDiscountApi = async (data) => {
    return responseApi(discountUrl, 'post', data)
}

export const getDiscountsApi = async () => {
    return responseApi(`${discountUrl}/all`, 'get')
}

export const getDiscountApi = async (id) => {
    return responseApi(`${discountUrl}?id=${id}`, 'get')
}

export const updateDiscountApi = async (id, data) => {
    return responseApi(`${discountUrl}?id=${id}`, 'put', data)
}

export const deleteDiscountApi = async (id) => {
    return responseApi(`${discountUrl}?id=${id}`, 'delete')
}