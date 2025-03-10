import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { setUser } from "../redux/authSlice";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email: "", password: ""})

    const handleLoggin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await loginUser(formData);
            dispatch(setUser(user));
            navigate("/");
        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData, [e.target.name]:e.target.value })
    }

    return (
        <form onSubmit={handleLoggin}>
            <input type="text" name="email" id="" value={formData.email} onChange={handleChange}/>
            <input type="password" name="password" id="" value={formData.password} onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
