import { useState } from "react";
import { createProduct } from "../api/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchCategory } from "../api/category";

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

    const {data: categories, isLoading: loadingCategory, isError} = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategory
    })

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
        <form className="w-1/2 max-w-md mx-auto p-4 border-2 border-accent rounded-2xl shadow-lg shadow-secondary/50">
            <div className="flex flex-col gap-3">
                <div className="flex justify-between w-full items-center">
                    <label>Name: </label>
                    <input
                        type="text"
                        value={formData.product_name}
                        name="product_name"
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Desctiption: </label>
                    <textarea
                        name="product_desctiption"
                        value={formData.product_desctiption}
                        onChange={handleChange}
                        className="mt-1.5 border border-gray-300 h-32 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <div className="flex justify-between w-full items-center">
                    <label>Price: </label>
                    <input
                        type="text"
                        value={formData.price}
                        name="price"
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <div className="flex justify-between w-full items-center">
                    <label>Image: </label>
                    <input
                        type="text"
                        value={formData.product_image}
                        name="product_image"
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <div className="flex justify-between w-full items-center">
                    <label>Category: </label>
                    <select name="category" value={formData.category} onChange={handleChange}>
                        <option value="Unknown">Unknown</option>
                        {categories?.map(item => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between w-full items-center">
                    <label>Quatity: </label>
                    <input
                        type="number"
                        value={formData.quatity}
                        name="quatity"
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
            </div>
            <button
                onClick={handleSubmit}
                className="mt-2 p-2 bg-gray-100 shadow-md rounded-md border border-secondary hover:scale-102 transition-transform duration-300"
            >
                Add product
            </button>
        </form>
    );
};

export default CreateProduct;
