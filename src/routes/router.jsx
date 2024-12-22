import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import AddMarathon from "../pages/AddMarathon";
import MyMarathon from "../pages/MyMarathon";
import MyApply from "../pages/MyApply";
import AllMarathon from "../pages/AllMarathon";
import PrivateRoute from "./PrivateRoute";
import MarathonDetails from "../pages/MarathonDetails";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/marathon`)
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/all-marathon',
        element: <AllMarathon></AllMarathon>,
        loader: () => fetch(`http://localhost:5000/marathons`)
      },
      {
        path: '/marathon-details/:id',
        element: <PrivateRoute>
           <MarathonDetails></MarathonDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/marathon/${params.id}`)
      },
      {
        path: '/add-marathon',
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
    element: <Error></Error>
  }
])

export default router;