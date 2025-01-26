import { Outlet } from "react-router";
import Navbar from "../../assets/Components/Navbar/Navbar";
import Footer from "../../assets/Components/Footer/Footer";

const MainLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayouts;