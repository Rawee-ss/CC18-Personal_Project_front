// import axios from "axios";
import axios from "../config/axios"


export const saveOrder = (form) => {
    return axios.patch("/order", form)
}

export const updateOrderStatus = (form) => {
    return axios.patch("/order/update-status/:id", form)
}

export const getOrderApi = () => {
    return axios.get("/order")
}

export const getAllOrderApi = () => {
    return axios.get("/order/all")
}

export const getItemOrder = () => {
    return axios.get("/order/update-status")
}

export const paymentStatus = () => {
    return axios.get("/order")
}
