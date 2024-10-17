import axios from 'axios'
import React from 'react'

export const createCategory = async (token, form) => {
    return await axios.post("http://localhost:8000/category", form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getAllCategory = async (token) => {
    return await axios.get("http://localhost:8000/category", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteCategory = async (token, id) => {
    return await axios.delete("http://localhost:8000/category/"+id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
