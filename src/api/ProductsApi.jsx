import axios from "axios"

export const creatProducts = async (token, form) => {
    return await axios.post("http://localhost:8000/products/", form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getProducts = async (token, count = 20) => {
    return await axios.get("http://localhost:8000/products/" + count, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateProducts = async (token) => {
    return await axios.get("http://localhost:8000/products", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteProduct = async (token, id) => {
    return axios.delete('http://localhost:8000/products/' + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

