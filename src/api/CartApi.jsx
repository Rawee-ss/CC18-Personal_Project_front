import axios from 'axios'

export const createCategory = async (token, productsId) => {
    return await axios.post(`http://localhost:8000/cart/${productsId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}