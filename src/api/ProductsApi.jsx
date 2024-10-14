import axios from "axios"

export const creatProducts = (form) => {
    return axios.post("http://localhost:8000/product", form)}