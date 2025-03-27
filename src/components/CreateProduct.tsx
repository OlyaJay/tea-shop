import { useState } from "react";
import { createProduct } from "../api/product";

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        product_name: "",
        product_desctiption: "",
        price: "",
        product_image: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            await createProduct({
                product_name: formData.product_name,
                product_desctiption: formData.product_desctiption,
                price: Number(formData.price),
                product_image: formData.product_image,
            });

            setFormData({
                product_name: "",
                product_desctiption: "",
                price: "",
                product_image: "",
            });
        } catch (error: any) {
            setError(error.response.data.error);
        }
    };

    return (
        <form className="flex flex-col items-center">
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="product_name"
                    onChange={handleChange}
                    className="p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
            </div>
            <div>
                <label>Desctiption: </label>
                <textarea name="product_desctiption" onChange={handleChange} />
            </div>
            <div>
                <label>Price: </label>
                <input
                    type="text"
                    name="price"
                    onChange={handleChange}
                    className="p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
            </div>
            <div>
                <label>Image: </label>
                <input
                    type="text"
                    name="product_image"
                    onChange={handleChange}
                    className="p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
            </div>
            <button onClick={handleSubmit}>Add product</button>
        </form>
    );
};

export default CreateProduct;
