import axios from "axios"

export const creatProducts = async (token) => {
    return await axios.post("http://localhost:8000/products", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const getProducts = async () => {
    return await axios.get("http://localhost:8000/products", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateProducts = async () => {
    return await axios.get("http://localhost:8000/products", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


