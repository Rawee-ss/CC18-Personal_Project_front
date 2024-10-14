import React from 'react'
import AdminSidebar from '../component/admin/AdminSidebar'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../component/admin/AdminHeader'

export default function AdminLayout() {
  return (
    <div>
      <div className='flex h-screen w-screen overflow-hidden bg-gradient-to-r'>


        <div className='flex flex-col flex-1'>
          <AdminHeader />
          {/* <AdminSidebar /> */}

          <div className='flex-1 p-2 min-h-0 overflow-auto'>
            <Outlet />
          </div>
        </div>
      </div >
    </div>
  )
}
