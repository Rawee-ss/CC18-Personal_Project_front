import axios from "axios"

export const updateUserProfile = (form) => {
    return axios.patch("http://localhost:8000/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getUserProfile = (form) => {
    return axios.get("http://localhost:8000/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}