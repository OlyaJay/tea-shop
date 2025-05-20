import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { setNavigator } from "./services/navigateService";
import { useEffect } from "react";

const App = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setNavigator(navigate);
    }, [navigate]);
    return (
        <div className="font-secondary px-2 sm:px-4 md:px-8 lg:px-16">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default App;
