import { courseLanguageUrl, courseTypeUrl, bankUrl, picUrl, enumsUrl } from "./apiUrls"
import responseApi from "./responseApi"

export const enumsApi = async () => {
    return responseApi(enumsUrl, 'get')
}

export const createPicApi = async (data) => {
    return responseApi(picUrl, 'post', data)
}

export const deletePicApi = async (id) => {
    return responseApi(`${picUrl}?id=${id}`, 'delete')
}

export const createBankApi = async (data) => {
    return responseApi(bankUrl, 'post', data)
}

export const deleteBankApi = async (id) => {
    return responseApi(`${bankUrl}?id=${id}`, 'delete')
}

export const createCourseType = async (data) => {
    return responseApi(courseTypeUrl, 'post', { name: data })
}

export const deleteCourseTypeApi = async (id) => {
    return responseApi(`${courseTypeUrl}?id=${id}`, 'delete')
}

export const createCourseLanguage = async (data) => {
    return responseApi(courseLanguageUrl, 'post', { name: data })
}

export const deleteCourseLanguageApi = async (id) => {
    return responseApi(`${courseLanguageUrl}?id=${id}`, 'delete')
}

