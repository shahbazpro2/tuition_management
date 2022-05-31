import { studentIssueUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createStudentIssueApi = async (data) => {
    return responseApi(studentIssueUrl, 'post', data)
}

export const getStudentIssueApi = async (studentId) => {
    return responseApi(`${studentIssueUrl}?id=${studentId}`, 'get')
}