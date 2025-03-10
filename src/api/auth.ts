import { api } from "./axiosInstance";

export const registerUser = async (userData: {name: string; password: string, email: string}) => {
    const responce = await api.post("/users/register", userData)
    return responce.data
}

export const loginUser = async(userData: {password: string, email: string})=>{
    const responce = await api.post("/users/login", userData)
    return responce.data
}

export const logoutUser = async()=>{
    await api.post("/users/logout")
}