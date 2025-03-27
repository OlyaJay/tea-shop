import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
    return <div className="font-secondary px-2 sm:px-4 md:px-8 lg:px-16">
		<NavBar/>
		<Outlet/>
	</div>;
};

export default App;
