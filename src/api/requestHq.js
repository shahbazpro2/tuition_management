import { requestHqUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createRequestHqApi = async (data) => {
    return responseApi(requestHqUrl, 'post', data)
}

export const getRequestHqApi = async (id) => {
    return responseApi(`${requestHqUrl}?id=${id}`, 'get')
}