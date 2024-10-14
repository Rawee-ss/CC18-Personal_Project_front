import React from 'react'
import MainNav from '../component/MainNav'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='flex h-screen w-screen'>
            <div className='flex flex-col flex-1 '>
                <MainNav />
                <div className='flex-1 min-h-0 overflow-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
