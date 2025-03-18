import { api } from "./axiosInstance";

export const createProduct = async(productData:{product_name: string; product_desctiption: string; price: number; product_image: string}) => {
    const responce = await api.post("/api/products/create", productData)
    return responce.data
}