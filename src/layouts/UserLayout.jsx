import React from 'react'
import { Outlet } from 'react-router-dom'
import UserSidebar from '../component/user/UserSidebar'
import UserHeader from '../component/user/UserHeader'

export default function UserLayout() {
  return (
    <div>
      <div className='flex h-screen w-screen overflow-hidden bg-gradient-to-r'>

        <div className='flex flex-col flex-1'>
          <UserHeader/>

          <div className='flex-1 p-2 min-h-0 overflow-auto'>
            <Outlet />
          </div>
        </div>
      </div >
    </div>
  )
}
