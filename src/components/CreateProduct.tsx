import { useState } from "react";
import { createProduct } from "../api/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ProductForm from "./ProductForm";

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        product_name: "",
        product_desctiption: "",
        price: "",
        product_image: "",
        category: "",
        quatity: "",
    });
    const queryClient = useQueryClient();

    const [message, setMessage] = useState<string | null>(null);

    const { mutate, isLoading } = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            setMessage("Product add");
            setFormData({
                product_name: "",
                product_desctiption: "",
                price: "",
                product_image: "",
                category: "",
                quatity: "",
            });
        },
        onError: (error: unknown) => {
            if (error instanceof AxiosError) {
                setMessage(error.response?.data?.error || "Error creating");
            } else {
                setMessage("error");
            }
        },
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        mutate({
            product_name: formData.product_name,
            product_desctiption: formData.product_desctiption,
            price: Number(formData.price),
            product_image: formData.product_image,
            category: formData.category,
            quatity: formData.quatity,
        });
    };

    return (
        <ProductForm handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} buttonText={"Add Product"}/>
    );
};

export default CreateProduct;
