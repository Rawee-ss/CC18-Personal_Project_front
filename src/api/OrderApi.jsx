// import axios from "axios";
import axios from "../config/axios"


export const saveOrder = ( form) => {
    return axios.post("/order", form)

}
