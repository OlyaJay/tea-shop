import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { setUser } from "../redux/authSlice";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });

    const handleRegistre = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await registerUser(formData);
            dispatch(setUser(user));
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleRegistre}>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            <input type="text" name="" value={formData.password} onChange={handleChange}/>
            <button type="submit">Sing up</button>
        </form>
    );
};

export default RegisterPage;
