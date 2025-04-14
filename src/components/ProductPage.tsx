import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../api/product"
import { Product } from "../pages/HomePage"
import Loading from "./Loading"

const ProductPage = () => {
  const {id} = useParams<{id:string}>()

  const {data: product, isLoading, isError} = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: ()=>fetchProductById(id as string),
    enabled: Boolean(id)
  })

  return (
    <div className="max-w-6xl mx-auto p-4">
        {isLoading&&<Loading/>}
        <div className=" grid md:grid-cols-2 gap-10 items-center">
            <img src={product?.product_image} alt="" className=" w-full"/>
            <div className=" space-y-4">
                <h2 id="name" className="text-2xl font-semibold">{product?.product_name}</h2>
                <p id="price" className="text-xl font-bold">{product?.price}грн</p>
                <button>Додати в кошик</button>
            </div>
        </div>
        <div>
            <p id="description">{product?.product_desctiption}</p>
        </div>
    </div>
  )
}

export default ProductPage