import { studentInvoiceUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createStudentInvoiceApi = async (data) => {
    return responseApi(studentInvoiceUrl, 'post', data)
}

export const getStudentInvoicesApi = async () => {
    return responseApi(`${studentInvoiceUrl}/all`, 'get')
}

export const getStudentInvoiceApi = async (id) => {
    return responseApi(`${studentInvoiceUrl}?id=${id}`, 'get')
}

export const updateStudentInvoiceApi = async (id, data) => {
    return responseApi(`${studentInvoiceUrl}?id=${id}`, 'put', data)
}

export const deleteStudentInvoiceApi = async (id) => {
    return responseApi(`${studentInvoiceUrl}?id=${id}`, 'delete')
}