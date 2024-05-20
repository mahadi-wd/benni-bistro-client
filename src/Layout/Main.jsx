import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shered/Navbar/Navbar";
import Footer from "../Pages/Shered/Footer/Footer";


const Main = () => {
    const location = useLocation()
    console.log(location);
    const hideNavFoot = location.pathname.includes('login')
    return (
        <div>
            {hideNavFoot || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideNavFoot || <Footer></Footer>}
        </div>
    );
};

export default Main;