export const setAccessToken = token => localStorage.setItem("TOKEN",token)
export const getAccessToken = () => localStorage.getItem("TOKEN")
export const removeAccessToken = () => localStorage.removeItem("TOKEN")