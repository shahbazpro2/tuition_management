import { centerInvoiceUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createCenterInvoiceApi = async (data) => {
    return responseApi(centerInvoiceUrl, 'post', data)
}

export const getCenterInvoicesApi = async () => {
    return responseApi(`${centerInvoiceUrl}/all`, 'get')
}

export const getCenterInvoiceCenterApi = async (id) => {
    return responseApi(`${centerInvoiceUrl}/center?id=${id}`, 'get')
}

export const getCenterInvoiceApi = async (id) => {
    return responseApi(`${centerInvoiceUrl}?id=${id}`, 'get')
}

export const updateCenterInvoiceApi = async (id, data) => {
    return responseApi(`${centerInvoiceUrl}?id=${id}`, 'put', data)
}

export const deleteCenterInvoiceApi = async (id) => {
    return responseApi(`${centerInvoiceUrl}?id=${id}`, 'delete')
}