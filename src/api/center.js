import { centerUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createCenterApi = async (data) => {
    return responseApi(centerUrl, 'post', data)
}

export const getCentersApi = async () => {
    return responseApi(`${centerUrl}/all`, 'get')
}