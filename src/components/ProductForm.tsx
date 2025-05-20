
import { useForm } from "react-hook-form";
import {
    PrdocutFormData,
    productValidate,
} from "../validation/productValidate";
import { zodResolver } from "@hookform/resolvers/zod";
import Category from "./Category";

interface Props {
    defaultValues?: Partial<PrdocutFormData>;
    onSubmit: (data: PrdocutFormData) => void;
    buttonText: string;
}

const ProductForm = ({ onSubmit, defaultValues, buttonText }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PrdocutFormData>({
        resolver: zodResolver(productValidate),
        defaultValues,
    });



    return (
        //     <form onSubmit={handleSubmit} className="w-1/2 max-w-md mx-auto p-4 border-2 border-accent rounded-2xl shadow-lg shadow-secondary/50">
        //     <div className="flex flex-col gap-3">
        //         <div className="flex justify-between w-full items-center">
        //             <label>Name: </label>
        //             <input
        //                 type="text"
        //                 value={formData.product_name}
        //                 name="product_name"
        //                 onChange={handleChange}
        //                 className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        //             />
        //         </div>
        //         <div className="flex flex-col">
        //             <label>Desctiption: </label>
        //             <textarea
        //                 name="product_desctiption"
        //                 value={formData.product_desctiption}
        //                 onChange={handleChange}
        //                 className="mt-1.5 border border-gray-300 h-32 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        //             />
        //         </div>
        //         <div className="flex justify-between w-full items-center">
        //             <label>Price: </label>
        //             <input
        //                 type="text"
        //                 value={formData.price}
        //                 name="price"
        //                 onChange={handleChange}
        //                 className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        //             />
        //         </div>
        //         <div className="flex justify-between w-full items-center">
        //             <label>Image: </label>
        //             <input
        //                 type="text"
        //                 value={formData.product_image}
        //                 name="product_image"
        //                 onChange={handleChange}
        //                 className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        //             />
        //         </div>
        //         <div className="flex justify-between w-full items-center">
        //             <label>Category: </label>
        //             <select name="category" value={formData.category} onChange={handleChange}>
        //                 <option value="Unknown">Unknown</option>
        //                 {categories?.map(item => (
        //                     <option key={item.id} value={item.name}>{item.name}</option>
        //                 ))}
        //             </select>
        //         </div>
        //         <div className="flex justify-between w-full items-center">
        //             <label>Quatity: </label>
        //             <input
        //                 type="number"
        //                 value={formData.quatity}
        //                 name="quatity"
        //                 onChange={handleChange}
        //                 className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        //             />
        //         </div>
        //     </div>
        //     <button
        //         className="mt-2 p-2 bg-gray-100 shadow-md rounded-md border border-secondary hover:scale-102 transition-transform duration-300"
        //     >
        //         {buttonText}
        //     </button>
        // </form>

        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 max-w-md mx-auto p-4 border-2 border-accent rounded-2xl shadow-lg shadow-secondary/50">
            <div>
                <input {...register("product_name")} className="border border-gray-300"/>
                {errors.product_name && <p>{errors.product_name.message}</p>}
            </div>
            <div>
                <textarea {...register("product_desctiption")} className="border border-gray-300"/>
                {errors.product_desctiption && (
                    <p>{errors.product_desctiption.message}</p>
                )}
            </div>
            <div>
                <input {...register("price")} className="border border-gray-300"/>
                {errors.price && <p>{errors.price.message}</p>}
            </div>
            <div>
                <input {...register("product_image")} className="border border-gray-300"/>
                {errors.product_image && <p>{errors.product_image.message}</p>}
            </div>
            <div>
                <input {...register("quatity")} className="border border-gray-300"/>
                {errors.quatity && <p>{errors.quatity.message}</p>}
            </div>
            <Category register={register("category")} errors={errors.category}/>
            <button type="submit">{buttonText}</button>
        </form>
    );
};

export default ProductForm;
