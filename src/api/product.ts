import { api } from "./axiosInstance";

export const createProduct = async(productData:{name: string; desctiption: string; price: number; image: string}) => {
    const responce = await api.post("/api/products/create", productData)
    return responce.data
}