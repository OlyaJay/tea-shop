import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../api/category";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props {
    register: UseFormRegisterReturn
    errors?: FieldError
}

const Category = ({register, errors}:Props) => {
        const {
        data: categories,
        isLoading,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategory,
    });
  return (
    <div>   
    <select {...register}>
        <option value="">Unknown</option>
        {categories?.map(item=>(
            <option key={item.id} value={item.name}>{item.name}</option>
        ))}
    </select>
    {errors && <p>{errors.message}</p>}
    </div>
  )
}

export default Category