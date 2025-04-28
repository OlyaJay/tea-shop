import { api } from "./axiosInstance";

export const fetchCart = async () => {
    const responce = await api.get("/cart");
    return responce.data;
};

export const addCart = async (productId: number, quantity: number) => {
    const responce = await api.post("/cart/add", { productId, quantity });
    return responce.data;
};

export const deleteFromCart = async (id: string) => {
    const responce = await api.delete(`/cart/delete/${id}`);
    return responce.data;
};

export const deleteCart = async () => {
    const responce = await api.delete("/cart/delete");
    return responce.data;
};
