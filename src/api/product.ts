import { api } from "./axiosInstance";

export const createProduct = async(productData:{product_name: string; product_desctiption: string; price: number; product_image: string}) => {
    const responce = await api.post("/products/create", productData)
    return responce.data
}

export const fetchProduct = async() => {
    const responce = await api.get("/products")
    return responce.data
}

export const searchProduct = async(search:string)=>{
    const responce = await api.get(`/products/search?q=${search}`)
    return responce.data
}