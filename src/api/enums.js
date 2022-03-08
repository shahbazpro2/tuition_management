import { createBankUrl, createPicUrl, enumsUrl } from "./apiUrls"
import responseApi from "./responseApi"

export const enumsApi = async () => {
    return responseApi(enumsUrl, 'get')
}

export const createPicApi = async (data) => {
    return responseApi(createPicUrl, 'post', data)
}

export const createBankApi = async (data) => {
    return responseApi(createBankUrl, 'post', data)
}