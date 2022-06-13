import { reportUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const getCenterReportApi = (data) => {
    return responseApi(reportUrl, 'post', data)
}