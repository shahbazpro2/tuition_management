import { reportUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const getCenterReportApi = (data) => {
    return responseApi(`${reportUrl}/center/`, 'post', data)
}

export const getStudentReportApi = (data) => {
    return responseApi(`${reportUrl}/student/`, 'post', data)
}