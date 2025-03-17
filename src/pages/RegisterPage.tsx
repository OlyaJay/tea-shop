import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });
    const [error, setError]= useState(null)

    const handleRegistre = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null)
        try {
            await registerUser(formData);
            navigate("/");
        } catch (error:any) {
        
            setError(error.response.data.error)
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleRegistre}>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            {error && <p>{error}</p>}
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            <input type="text" name="password" value={formData.password} onChange={handleChange}/>
            <button type="submit">Sing up</button>
        </form>
    );
};

export default RegisterPage;
