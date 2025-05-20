import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CreateProduct from "../pages/CreateProduct";
import HomePage from "../pages/HomePage";
import ProductPage from "../components/ProductPage";
import UpdateProduct from "../components/UpdateProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path:"",
            element: <HomePage/>
        },{
			path:'/login',
			element: <LoginPage/>
		},{
            path: '/register',
            element: <RegisterPage/>
        },{
            path: '/addproduct',
            element: <CreateProduct/>
        },{
            path: '/product/:id',
            element: <ProductPage/>
        },{
            path: '/product/upd/:id',
            element: <UpdateProduct/>
        }],
    },
]);
