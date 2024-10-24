// import axios from "axios";
import axios from "../config/axios"


export const saveOrder = (form) => {
    return axios.patch("/order", form)
}

export const updateOrderStatus = (data, id) => {
    return axios.patch("/order/update-status/" + id, data)
}

export const getOrderApi = () => {
    return axios.get("/order")
}

export const getAllOrderApi = () => {
    return axios.get("/order/all")
}

export const getItemOrder = (id) => {
    return axios.get("/order/update-status/" + id)
}

export const paymentStatus = () => {
    return axios.get("/order")
}
