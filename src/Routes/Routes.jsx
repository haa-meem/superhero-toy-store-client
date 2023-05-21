import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import NotFound from "../Pages/NotFound";
import AllToys from "../Pages/All Toys/AllToys";
import Toy from "../Pages/Toy";
import PrivateRoute from "./PrivateRoute";
import AToy from "../Pages/A Toy/AToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'alltoys/:id',
                element: <PrivateRoute><Toy></Toy></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
            },
            {
                path: 'atoy',
                element: <PrivateRoute><AToy></AToy></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;