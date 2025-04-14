import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../api/category";
import { useState } from "react";

const FilterProduct = ({setFilters}) => {

    const [formData, setFormData] = useState({
        category: "",
        minPrice: "",
        maxPrice: "",
        alphabet: ""
    })

    const {data: categories, isLoading, isError} = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategory
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFilters(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="category" value={formData.category} onChange={handleChange}>
                {categories?.map((item) => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
            <div>
                <input type="text" placeholder="minPrice" value={formData.minPrice} onChange={handleChange} name="minPrice"/>
                <input type="text" placeholder="maxPrice" value={formData.maxPrice} onChange={handleChange} name="maxPrice"/>
            </div>
            <select name="alphabet" value={formData.alphabet} onChange={handleChange}>
                <option value="desc">Z-A</option>
                <option value="asc">A-Z</option>
            </select>
            <button>Apply</button>
        </form>
    );
};

export default FilterProduct;
