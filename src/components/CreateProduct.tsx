import { useState } from "react"
import { createProduct } from "../api/product";

const CreateProduct = () => {
const [formData, setFormData]= useState({
    name: "",
    description: "",
    price: "",
    image: ""
})
const [error, setError] = useState(null)


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    try {
        await createProduct({
            name: formData.name,
            desctiption: formData.description,
            price: Number(formData.price),
            image: formData.image
        })

        setFormData({name: "", description: "", price: "", image: ""})
    } catch(error:any){
        setError(error.response.data.error)
    }
}


  return (
    <form>
        <label>Name: </label>
        <input type="text" />
        <label>Desctiption: </label>
        <textarea/>
        <label>Price: </label>
        <input type="text" />
        <label>Image: </label>
        <input type="text" />
        <button>Add product</button>
    </form>
  )
}

export default CreateProduct