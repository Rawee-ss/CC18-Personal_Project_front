import React from 'react'
import Home from '../page/Home'
import Layout from '../layouts/Layout'
import Category from '../page/Category'
import Register from '../page/auth/Register'
import Login from '../page/auth/Login'
import Unauthorization from '../page/Unauthorization'
import PageNotFound from '../page/PageNotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectRoute from './ProtectRoute'
import AdminLayout from '../layouts/AdminLayout'
import Products from "../page/admin/Products"
import UserLayout from '../layouts/UserLayout'
import AdminOrder from '../page/admin/AdminOrder'
import CartUser from "../page/user/CartUser"
import OrderUser from "../page/user/OrderUser"
import ProfileUser from "../page/user/ProfileUser"
import StoreUser from "../page/user/StoreUser"
import FavoriteUser from "../page/user/FavoriteUser"
import UploadProduct from '../component/admin/FromCreateProduct'
import FromEditProduct from '../component/admin/FromEditProduct'
import Dashboard from '../page/admin/Dashboard'
import FromPayment from '../component/user/FromPayment'
import FromBill from '../component/user/FromBill'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "category", element: <Category /> },
            { path: "register", element: <Register /> },
            { path: "login", element: <Login /> },
            { path: "unauthorization", element: <Unauthorization /> },
            { path: "*", element: <PageNotFound /> }
        ]
    },

    {
        path: "/admin",
        element: <ProtectRoute element={<AdminLayout />} allow={["ADMIN"]} />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "products", element: <Products /> },
            { path: "createProduct", element: <UploadProduct /> },
            { path: "editProduct/:id", element: <FromEditProduct /> },
            { path: "order", element: <AdminOrder /> },
            { path: "category", element: <Category /> },

        ]
    },
    {
        path: "/user",
        element: <ProtectRoute element={<UserLayout />} allow={["USER"]} />,
        children: [
            { index: true, element: <Home /> },
            { path: "cart", element: <CartUser /> },
            { path: "order", element: <OrderUser /> },
            { path: "profile", element: <ProfileUser /> },
            { path: "store", element: <StoreUser /> },
            { path: "favorite", element: <FavoriteUser /> },
            { path: "category", element: <Category /> },
            { path: "payment", element: <FromPayment /> },
            { path: "Bill", element: <FromBill /> },


        ]
    }


])




export default function AppRoute() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}



