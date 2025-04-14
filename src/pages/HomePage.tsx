import { useState } from "react";
import { fetchProduct, searchProduct } from "../api/product";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "../components/SearchInput";
import Loading from "../components/Loading";
import FilterProduct from "../components/FilterProduct";

export interface Product {
    id: number;
    product_name: string;
    product_desctiption: string;
    price: number;
    product_image?: string;
}

const HomePage = () => {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        category: "",
        minPrice: "",
        maxPrice: "",
        alphabet: ""
    })

    const {
        data: products = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["products", search, filters],
        queryFn: () => (search ? searchProduct(search) : fetchProduct(filters)),
        staleTime: 1000 * 60 * 5,
    });

    return (
        <div>
            <SearchInput setSearch={setSearch} />
            <FilterProduct setFilters={setFilters}/>
            <div
                className={
                    isLoading || products?.length === 0
                        ? "flex justify-center"
                        : "grid md:grid-cols-4 gap-8 px-9"
                }>
                {isLoading && <Loading />}
                {products?.length === 0 && <p>No items</p>}
                {products?.map((product:Product) => (
                        <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
