import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { setUser } from "../redux/authSlice";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleLoggin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await loginUser(formData);
            dispatch(setUser(user));
            console.log("login");

            navigate("/");
        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form
            onSubmit={handleLoggin}
            className="w-1/2 max-w-md mx-auto p-4 border-2 border-accent rounded-2xl shadow-lg shadow-secondary/50 flex flex-col gap-5">
            <p className="mx-auto">Login</p>
            <input
                type="text"
                name="email"
                id=""
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
                type="password"
                name="password"
                id=""
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
                type="submit"
                className="p-2 bg-gray-100 shadow-md rounded-md border border-secondary hover:scale-102 transition-transform duration-300"
            >
                Login
            </button>
        </form>
    );
};

export default LoginPage;
