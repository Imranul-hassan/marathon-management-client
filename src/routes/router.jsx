import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element : <Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>,
              },
              {
                path: '/register',
                element: <Register></Register>,
              },
        ]
    },
    {
        path: '*',
        element:<Error></Error>
    }
])

export default router;