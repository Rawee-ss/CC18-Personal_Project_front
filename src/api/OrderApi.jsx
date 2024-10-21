import axios from "axios";


export const saveOrder = (form) => {
    return axios.post("http://localhost:8000/order", form)
}
