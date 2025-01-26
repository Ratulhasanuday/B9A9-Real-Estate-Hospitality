import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OurService from "../pages/OurService/OurService";
import Map from "../pages/Map/Map";
import CardProperty from "../pages/Card-Property/CardProperty";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/card.json')
            },
            {
                path:'/card/:id', 
                element:<PrivateRoute><CardProperty></CardProperty></PrivateRoute>
            },
            {
                path:'/ourService',
                element:<OurService></OurService>,
                loader:()=>fetch('/card.json')
            },
            {
                path:'/map',
                element:<Map></Map>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])

;

export default routes;