import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#f8f9fa]">
            <div className="bg-[#2c598d]">
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-276px)] w-10/12 mx-auto '>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;