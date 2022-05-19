import { kpiUrl } from "./apiUrls"
import responseApi from "./responseApi"

export const createKpiApi = async (data) => {
    return responseApi(kpiUrl, 'post', data)
}

export const updateKpiApi = async (id, data) => {
    return responseApi(`${kpiUrl}?id=${id}`, 'put', data)
}

export const deleteCenterKpiApi = async (id) => {
    return responseApi(`${kpiUrl}?id=${id}`, 'delete')
}