import { useState } from "react";
import { createProduct } from "../api/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ProductForm from "../components/ProductForm";
import { PrdocutFormData } from "../validation/productValidate";
import { appNavigate } from "../services/navigateService";

const CreateProduct = () => {
    const queryClient = useQueryClient();

    const [message, setMessage] = useState<string | null>(null);

    const { mutate, isLoading } = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            setMessage("Product add");
           
        },
        onError: (error: unknown) => {
            if (error instanceof AxiosError) {
                setMessage(error.response?.data?.error || "Error creating");
            } else {
                setMessage("error");
            }
        },
    });

    const handleSubmit = (data: PrdocutFormData) => {
        setMessage(null);
        mutate(data);
        appNavigate("/")
    };

    return (
        <ProductForm onSubmit={handleSubmit} buttonText={"Add Product"}/>
    );
};

export default CreateProduct;
