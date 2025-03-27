import { useState } from "react";
import { fetchProduct, searchProduct } from "../api/product";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "../components/SearchInput";

export interface Product {
    id: number;
    product_name: string;
    product_desctiption: string;
    price: number;
    product_image: string;
}

const HomePage = () => {
    const [search, setSearch] = useState("");

    const {
        data: products = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["products", search],
        queryFn: () => (search ? searchProduct(search) : fetchProduct()),
        staleTime: 1000 * 60 * 5,
    });

    return (
        <div>
            <SearchInput setSearch={setSearch} />
            <div className="grid md:grid-cols-4 gap-8 px-9">
                {products?.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
