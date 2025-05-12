import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById, updProduct } from "../api/product";
import { AxiosError } from "axios";
import ProductForm from "./ProductForm";

const UpdateProduct = () => {
    const { id } = useParams();
      const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState({
        product_name: "",
        product_desctiption: "",
        price: "",
        product_image: "",
        category: "",
        quatity: "",
    });
    const [message, setMessage] = useState<string | null>(null);

    const {
        data: product,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(id as string),
        enabled: Boolean(id),
    });

    useEffect(() => {
        if (product) {
            setFormData({
                product_name: product.product_name,
                product_desctiption: product.product_desctiption,
                price: product.price,
                product_image: product.product_image || "",
                category: product.category || "",
                quatity: product.quatity,
            });
        }
    }, [product]);

    const { mutate } = useMutation({
        mutationFn: ()=>updProduct(id, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            setMessage("Product update");
        },
        onError: (error: unknown) => {
            if (error instanceof AxiosError) {
                setMessage(error.response?.data?.error || "Error update");
            } else {
                setMessage("error");
            }
        },
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        mutate()
        navigate("/")
    };

    return <ProductForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} buttonText={"Update"}/>;
};

export default UpdateProduct;
