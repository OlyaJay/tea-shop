import { api } from "./axiosInstance";

export const fetchCategory = async ()=>{
    const response = await api.get("/categories")
    return response.data
}