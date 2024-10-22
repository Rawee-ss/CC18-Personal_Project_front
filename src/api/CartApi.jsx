import axios from 'axios'

export const createCart = async (token, productsId) => {
    // console.log(token)
    return await axios.post(`http://localhost:8000/cart/${productsId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const getCart = async (token) => {
    // console.log(token)
    return await axios.get("http://localhost:8000/cart", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const deleteItemCart = async (token, cartItemId) => {
    // console.log(cartItemId)
    return await axios.delete(`http://localhost:8000/cart/${cartItemId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}