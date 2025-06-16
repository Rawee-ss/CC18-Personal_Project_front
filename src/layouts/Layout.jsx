import React, { useEffect } from 'react'
import MainNav from '../component/MainNav'
import { json, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AdminHeader from '../component/admin/AdminHeader'

export default function Layout() {
    const { role } = useAuth()

    return (
        <div className='flex h-screen w-screen'>
            <div className='flex flex-col flex-1 '>
                {role == "ADMIN" ? <AdminHeader /> : <MainNav />}
                <div className='flex-1 min-h-0 overflow-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
