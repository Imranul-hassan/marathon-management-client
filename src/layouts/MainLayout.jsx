import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#e6f0fa]">
            <div className="bg-[#1c4a7e]  sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-276px)] '>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;