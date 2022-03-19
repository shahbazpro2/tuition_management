import { packageUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createPackageApi = async (data) => {
    return responseApi(packageUrl, 'post', data)
}

export const getPackagesApi = async () => {
    return responseApi(`${packageUrl}/all`, 'get')
}

export const getPackageApi = async (id) => {
    return responseApi(`${packageUrl}?id=${id}`, 'get')
}

export const updatePackageApi = async (id, data) => {
    return responseApi(`${packageUrl}?id=${id}`, 'put', data)
}

export const deletePackageApi = async (id) => {
    return responseApi(`${packageUrl}?id=${id}`, 'delete')
}