import { createBrowserRouter } from "react-router-dom";
import AddAProduct from "../Components/Dashboard/AddAProduct";
import AllBuyers from "../Components/Dashboard/AllBuyers";
import AllSellers from "../Components/Dashboard/AllSellers";
import MyBuyers from "../Components/Dashboard/MyBuyers";
import MyOrders from "../Components/Dashboard/MyOrders";
import MyProducts from "../Components/Dashboard/MyProducts";
import ReportedItems from "../Components/Dashboard/ReportedItems";
import Welcome from "../Components/Dashboard/Welcome";
import ASUS from "../Components/Main/ASUS";
import Blog from "../Components/Main/Blog";
import Dell from "../Components/Main/Dell";
import Error from "../Components/Main/Error";
import Home from "../Components/Main/Home";
import Lenovo from "../Components/Main/Lenovo";
import Login from "../Components/Main/Login";
import SignUp from "../Components/Main/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> ,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/asus',
                element: <PrivateRoute><ASUS></ASUS></PrivateRoute>
            },
            {
                path: '/lenovo',
                element: <PrivateRoute><Lenovo></Lenovo></PrivateRoute>
            },
            {
                path: '/dell',
                element: <PrivateRoute><Dell></Dell></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard',
                element:<Welcome></Welcome>
            },
            {
                path: '/dashboard/allSellers',
                element:<AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reportedItems',
                element:<ReportedItems></ReportedItems>
            },
            {
                path: '/dashboard/addProduct',
                element:<AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/myProducts',
                element:<MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myBuyers',
                element:<MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/myOrders',
                element:<MyOrders></MyOrders>
            },
        ]
    }
    
])

export default router;