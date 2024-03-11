import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../layout/Main";
import LogIn from "../Pages/Login/LogIn";

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
        }
      ]
    },
  ]);

  export default router;