import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../../context/AuthContext'
import AdminSidebar from './AdminSidebar'



const AdminHeader = () => {



  return (
    <div className='bg-blue-950 text-white flex h-12 w-full items-center z-50 px-4 gap-4'>
      <a className='text-2xl font-bold'>
        LOGO
      </a>
      <div className='flex w-full justify-between'>
        <ul className=' flex items-center gap-4'>
          <li><Link to={"/admin"}>HOME</Link></li>
          <li><Link to={"/admin/category"}>CATEGORY</Link></li>
        </ul>

        <div>
          <ul className='flex gap-4'>
            {/* <li><Link to={"/login"}>LOGIN</Link></li> */}
            <AdminSidebar />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader