import axios from "../config/axios"

export const getStore = (id) => {
    return axios.get(`/store-product/${id}`)
}

export const updateStatus = (id, status) => {
    return axios.patch(`/store-product/${id}`, {status})
}