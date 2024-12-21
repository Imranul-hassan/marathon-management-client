import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import AddMarathon from "../pages/AddMarathon";
import MyMarathon from "../pages/MyMarathon";
import MyApply from "../pages/MyApply";


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
              {
                path:'/add-marathon',
                element: <AddMarathon></AddMarathon>
              },
              {
                path: '/my-marathon',
                element: <MyMarathon></MyMarathon>
              },
              {
                path: '/my-apply',
                element: <MyApply></MyApply>
              }
        ]
    },
    {
        path: '*',
        element:<Error></Error>
    }
])

export default router;