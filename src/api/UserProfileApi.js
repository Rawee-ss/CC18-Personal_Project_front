import axios from "../config/axios"

export const updateUserProfile = (form) => {
    return axios.patch("/profile", form )
}

export const getUserProfile = (form) => {
    return axios.get("/profile",form)
}