import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { logout } from "../redux/authSlice";

const NavBar = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user.user)


    const handleLogout =() => {
        dispatch(logout())
    }

    return (
        <div className="flex items-center justify-between py-3">
            <span className=" text-primary font-primary text-3xl">Tea Store</span>
            <ul className="flex">
                <li><Link to={"/"} className="px-3 hover:bg-gray-200 hover:p-2 hover:shadow-lg hover:rounded-lg transition-all duration-200">Home</Link></li>
                <li><Link to={"/addproduct"} className="px-3 hover:bg-gray-200 hover:p-2 hover:shadow-lg hover:rounded-lg transition-all duration-200">Add Product</Link></li>
                {!user ? (
                    <>
                    <li><Link to={"/login"} className="px-3 hover:bg-gray-200 hover:p-2 hover:shadow-lg hover:rounded-lg transition-all duration-200">Login</Link></li>
                    <li><Link to={"/register"} className="px-3 hover:bg-gray-200 hover:p-2 hover:shadow-lg hover:rounded-lg transition-all duration-200">Register</Link></li>
                    </>
                ) : (
                    <>
                    <button onClick={handleLogout} className="px-3 hover:bg-gray-200 hover:p-2 hover:shadow-lg hover:rounded-lg transition-all duration-200">logout</button>
                    </>
                ) }
                
            </ul>
        </div>
    );
};

export default NavBar;
