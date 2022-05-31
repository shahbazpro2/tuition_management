import { studentIssueUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createStudentIssueApi = async (data) => {
    return responseApi(studentIssueUrl, 'post', data)
}

export const getStudentIssueApi = async (studentId) => {
    return responseApi(`${studentIssueUrl}?id=${studentId}`, 'get')
}

export const getStudentInvoiceApi = async (id) => {
    return responseApi(`${studentIssueUrl}?id=${id}`, 'get')
}

export const updateStudentInvoiceApi = async (id, data) => {
    return responseApi(`${studentIssueUrl}?id=${id}`, 'put', data)
}

export const deleteStudentInvoiceApi = async (id) => {
    return responseApi(`${studentIssueUrl}?id=${id}`, 'delete')
}