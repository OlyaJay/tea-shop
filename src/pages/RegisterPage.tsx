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
    const [error, setError] = useState(null);

    const handleRegistre = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            await registerUser(formData);
            navigate("/");
        } catch (error: any) {
            setError(error.response.data.error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleRegistre} className="w-1/2 max-w-md mx-auto p-4 border-2 border-accent rounded-2xl shadow-lg shadow-secondary/50 flex flex-col gap-5">
            <p className="mx-auto">Register</p>
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {error && <p>{error}</p>}
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
                type="submit"
                className="p-2 bg-gray-100 shadow-md rounded-md border border-secondary hover:scale-102 transition-transform duration-300"
            >
                Sing up
            </button>
        </form>
    );
};

export default RegisterPage;
