import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CreateProduct from "../components/CreateProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
			path:'/',
			element: <LoginPage/>
		},{
            path: '/register',
            element: <RegisterPage/>
        },{
            path: '/addproduct',
            element: <CreateProduct/>
        }],
    },
]);
