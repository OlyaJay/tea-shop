import { useEffect, useState } from "react";
import { fetchProduct } from "../api/product";
import ProductCard from "../components/ProductCard";

export interface Product {
    id: number;
    product_name: string;
    product_desctiption: string;
    price: number;
    product_image: string;
}

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProduct();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default HomePage;

