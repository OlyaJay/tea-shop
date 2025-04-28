import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import { deleteProduct, fetchProductById } from "../api/product"
import { Product } from "../pages/HomePage"
import Loading from "./Loading"
import { useState } from "react"
import { addCart } from "../api/cart"

const ProductPage = () => {
  const {id} = useParams<{id:string}>()
  // const [quantity, setQuantity] = useState(0);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {data: product, isLoading, isError} = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: ()=>fetchProductById(id as string),
    enabled: Boolean(id)
  })

  const mutation = useMutation({
    mutationFn: (id:string) => deleteProduct(id),
    onSuccess: ()=>{
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/")
    }
  })

  const addMutation = useMutation({
    mutationFn: ({productId, quantity}:{productId:number, quantity:number}) => addCart(productId, quantity),
    onSuccess: ()=>{
      // queryClient.invalidateQueries({queryKey: ["cart"]})
      console.log('add cart');
    },
    onError: (error)=>{
      console.error(error);
    }
  })



  return (
    <div className="max-w-6xl mx-auto p-4">
        {isLoading&&<Loading/>}
        <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src={product?.product_image} alt="" className=" w-full"/>
            <div className="space-y-4">
                <h2 id="name" className="text-2xl font-semibold">{product?.product_name}</h2>
                <p id="price" className="text-xl font-bold">{product?.price}грн</p>
                <button onClick={()=>product && addMutation.mutate({productId:product?.id, quantity:1})}>Додати в кошик</button>
                <button onClick={()=>id && mutation.mutate(id)}>Видалити товар</button>
            </div>
        </div>
        <div>
            <p id="description">{product?.product_desctiption}</p>
        </div>
    </div>
  )
}

export default ProductPage