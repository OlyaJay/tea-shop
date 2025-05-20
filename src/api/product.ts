import { PrdocutFormData } from "../validation/productValidate";
import { api } from "./axiosInstance";

export const createProduct = async (productData:PrdocutFormData) => {
    const responce = await api.post("/products/create", productData);
    return responce.data;
};

export const fetchProduct = async (filters: {
    category: string;
    minPrice: string;
    maxPrice: string;
    alphabet: string;
}) => {
    const responce = await api.get("/products/filter", {
        params: filters
    });
    return responce.data;
};

export const updProduct = async (id: string, productData: {
    product_name: string;
    product_desctiption: string;
    price: number;
    product_image: string;
    category: string;
    quatity: string;
}) => {
    const responce = await api.post(`/products/up/${id}`, productData)
    return responce.data;
}



export const searchProduct = async (search: string) => {
    const responce = await api.get(`/products/search?q=${search}`);
    return responce.data;
};

export const fetchProductById = async (id: string) => {
    const responce = await api.get(`/products/${id}`);
    return responce.data;
};

export const deleteProduct = async (id: string) =>{
    const responce = await api.post(`/products/delete/${id}`);
    return responce.data;
}
