import { studentUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createStudentApi = (data) => {
    return responseApi(studentUrl, 'post', data)
}

export const getStudentsApi = (date) => {
    return responseApi(`${studentUrl}/all?date=${date}`, 'get')
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

export const getStudentCoursesApi = () => {
    return responseApi(`${studentUrl}/courses/`, 'get')
}

export const getStudentsCourseApi = (id) => {
    return responseApi(`${studentUrl}/courses/${id}`, 'get')
}