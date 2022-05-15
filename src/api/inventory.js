import { inventoryCategoryUrl, inventoryUrl } from "./apiUrls"
import responseApi from "./responseApi"


export const createInventoryCategoryApi = async (data) => {
    return responseApi(inventoryCategoryUrl, 'post', data)
}

export const deleteInventoryCategoryApi = async (id) => {
    return responseApi(`${inventoryCategoryUrl}?id=${id}`, 'delete')
}

export const createInventoryApi = async (data) => {
    return responseApi(inventoryUrl, 'post', data)
}


export const getInventoriesApi = async () => {
    return responseApi(`${inventoryUrl}/all`, 'get')
}

export const getInventoryApi = async (id) => {
    return responseApi(`${inventoryUrl}?id=${id}`, 'get')
}

export const updateInventoryApi = async (id, data) => {
    return responseApi(`${inventoryUrl}?id=${id}`, 'put', data)
}

export const deleteInventoryApi = async (id) => {
    return responseApi(`${inventoryUrl}?id=${id}`, 'delete')
}