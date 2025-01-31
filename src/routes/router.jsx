import { createBrowserRouter, useLocation } from "react-router-dom";
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
import UpdateMyMarathon from "../components/UpdateMyMarathon";
import UpdateMyApply from "../components/UpdateMyApply";
import MarathonRegistration from "../components/MarathonRegistration";
import AboutUs from "../pages/AboutUs";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(` https://marathon-management-server-zeta.vercel.app/marathon`)
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
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
        loader: () => fetch(` https://marathon-management-server-zeta.vercel.app/marathons`)
      },
      {
        path: '/marathon-details/:id',
        element: <PrivateRoute>
          <MarathonDetails></MarathonDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(` https://marathon-management-server-zeta.vercel.app/marathon/${params.id}`)
      },
      {
        path: '/registration/:id',
        element: <PrivateRoute>
          <MarathonRegistration></MarathonRegistration>
        </PrivateRoute>,
        loader: ({ params }) => fetch(` https://marathon-management-server-zeta.vercel.app/registration/${params.id}`)
      },

      {
        path: '/add-marathon',
        element: <PrivateRoute>
          <AddMarathon></AddMarathon>
        </PrivateRoute>
      },
      {
        path: '/my-marathon/:email',
        element: <PrivateRoute>
         <MyMarathon></MyMarathon>
        </PrivateRoute>
      },
      {
        path: '/my-marathon/:email/update-marathon/:id',
        element: <PrivateRoute>
         <UpdateMyMarathon></UpdateMyMarathon>
        </PrivateRoute>,
        loader: ({ params }) => fetch(` https://marathon-management-server-zeta.vercel.app/my-marathon/${params.email}/update-marathon/${params.id}`)
      },
      {
        path: '/my-apply/:email',
        element: <PrivateRoute>
         <MyApply></MyApply>
        </PrivateRoute>
      },
      {
        path: '/my-apply/:email/update-apply/:id',
        element: <PrivateRoute>
          <UpdateMyApply></UpdateMyApply>
        </PrivateRoute>,
        loader: ({ params }) => fetch(` https://marathon-management-server-zeta.vercel.app/my-apply/${params.email}/update-apply/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
])

export default router;