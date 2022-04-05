import { studentUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createStudentApi = (data) => {
    return responseApi(studentUrl, 'post', data)
}

export const getStudentsApi = () => {
    return responseApi(`${studentUrl}/all`, 'get')
}

export const getStudentApi = (id) => {
    return responseApi(`${studentUrl}?id=${id}`, 'get')
}

export const updateStudentApi = (id, data) => {
    return responseApi(`${studentUrl}?id=${id}`, 'put', data)
}

export const deleteStudentApi = (id) => {
    return responseApi(`${studentUrl}?id=${id}`, 'delete')
}