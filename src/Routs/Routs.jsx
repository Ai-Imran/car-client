import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../layout/Main";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Check from "../Pages/Check";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path:'/login',
          element:<LogIn/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
      {
        path:'/checkout/:id',
        element:<PrivateRouts><Check></Check></PrivateRouts>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRouts><Bookings></Bookings></PrivateRouts>
      }

      
       
      ]
    },
  ]);

  export default router;