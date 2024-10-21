import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../../context/AuthContext'
import AdminSidebar from './AdminSidebar'
import QuegosLogo from "../../image/QuegosLogo.png"




const AdminHeader = () => {



  return (
    <div className='bg-blue-950'>
      <div className=' text-white flex justify-between h-20 w-full items-center px-4 gap-4'>

        <div className='h-32 w-32 m-6 flex justify-center'>
          <Link to={"/admin"}>
            <img src={QuegosLogo} alt='Logo' />
          </Link>
        </div>
        {/* <a className='text-2xl font-bold'>
        LOGO
      </a> */}
        {/* <div className='flex w-full justify-between'>
          <ul className=' flex items-center gap-4'> */}
            {/* <li><Link to={"/admin"}>HOME</Link></li> */}
            {/* <li><Link to={"/admin/category"}>CATEGORY</Link></li>
          </ul> */}

          <div>
            <ul className='flex gap-4 m-10'>
              {/* <li><Link to={"/login"}>LOGIN</Link></li> */}
              <AdminSidebar />
            </ul>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default AdminHeader