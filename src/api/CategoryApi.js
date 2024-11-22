import axios from 'axios'

export const createCategory = async (token, form) => {
    return await axios.post("http://localhost:8000/category", form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getAllCategory = async () => {
    return await axios.get("http://localhost:8000/category")
}

export const deleteCategory = async (token, id) => {
    return await axios.delete("http://localhost:8000/category/" +id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
