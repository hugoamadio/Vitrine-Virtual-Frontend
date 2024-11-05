import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Index from "../pages/Index";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/",
        element: <Index/>
    }
])

function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes