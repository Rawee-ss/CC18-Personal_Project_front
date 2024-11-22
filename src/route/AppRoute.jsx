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
import Products from "../page/admin/Products"
import CartUser from "../page/user/CartUser"
import OrderUser from "../page/user/OrderUser"
import ProfileUser from "../page/user/ProfileUser"
import StoreUser from "../page/user/StoreUser"
import FavoriteUser from "../page/user/FavoriteUser"
import UploadProduct from '../component/admin/FromCreateProduct'
import FromEditProduct from '../component/admin/FromEditProduct'
import FromPayment from '../component/user/FromPayment'
import FromBill from '../component/user/FromBill'
import FromStatusPayment from '../component/admin/FromStatusPayment'
import FromStore from '../component/user/FromStore'
import FromProductDetailUser from '../component/user/FromProductDetailUser'
import FromProductDetailAdmin from '../component/admin/FromProductDetailAdmin'
import FromStatusOrder from '../component/user/FromStatusOrder'
import { AuthProvider } from '../context/AuthContext'
// import FromProductDetail from '../page/FromProductDetail'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "register", element: <Register /> },
            { path: "login", element: <Login /> },
            { path: "products/:id", element: <FromProductDetailUser /> },
            { path: "unauthorization", element: <Unauthorization /> },
            { path: "*", element: <PageNotFound /> },
        ]
    },

    {
        path: "/admin",
        element: <ProtectRoute element={<Layout />} allow={["ADMIN"]} />,
        children: [
            { index: true, element: <Home /> },
            { path: "products", element: <Products /> },
            { path: "createProduct", element: <UploadProduct /> },
            { path: "editProduct/:id", element: <FromEditProduct /> },
            { path: "order", element: <OrderUser /> },
            // { path: "category", element: <Category /> },
            { path: "order/status-payment/:id", element: <FromStatusPayment /> },
            { path: "product/:id", element: <FromProductDetailAdmin /> },
            { path: "profile-admin", element: <ProfileUser /> },

        ]
    },
    {
        path: "/",
        element: <ProtectRoute element={<Layout />} allow={["USER"]} />,
        children: [
            { index: true, element: <Home /> },
            { path: "cart", element: <CartUser /> },
            { path: "order", element: <OrderUser /> },
            { path: "profile", element: <ProfileUser /> },
            { path: "store", element: <StoreUser /> },
            { path: "favorite", element: <FavoriteUser /> },
            { path: "category", element: <Category /> },
            { path: "payment", element: <FromPayment /> },
            { path: "bill", element: <FromBill /> },
            { path: "store-product/:id", element: <FromStore /> },
            { path: "order/status-payment/:id", element: <FromStatusOrder /> },
        ]
    }


])




export default function AppRoute() {
    return (
        <div>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </div>
    )
}



