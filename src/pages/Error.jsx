import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-4/12 mx-auto mt-56">
           <p className="font-bold text-xl mb-6">Page Not Found </p>
         <Link to="/"><button className="btn text-lg font-bold">Go to Home</button></Link>
        </div>
    );
};

export default Error;