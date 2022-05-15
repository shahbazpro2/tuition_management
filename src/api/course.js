import { courseUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createCourseApi = async (data) => {
    return responseApi(courseUrl, 'post', data)
}

export const getCoursesApi = async () => {
    return responseApi(`${courseUrl}/all`, 'get')
}

export const getCourseApi = async (id) => {
    return responseApi(`${courseUrl}?id=${id}`, 'get')
}

export const updateCourseApi = async (id, data) => {
    return responseApi(`${courseUrl}?id=${id}`, 'put', data)
}

export const deleteCourseApi = async (id) => {
    return responseApi(`${courseUrl}?id=${id}`, 'delete')
}