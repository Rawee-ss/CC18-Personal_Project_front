import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { SlLogout } from "react-icons/sl";
import { IoFileTrayOutline } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";
import { LogOut } from 'lucide-react';
import { LayoutGrid } from 'lucide-react';
import { LayoutDashboard, Folder, Gamepad, CircleUserRound } from 'lucide-react';


export default function AdminSidebar() {

  // const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate()
  const { actionLogout } = useAuth()
  const hdlLogout = () => {
    actionLogout()
    navigate("/")
  }


  return (

    <div className="drawer drawer-end z-50">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer btn-primary">PROFILE ADMIN</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex justify-between">
          <div>
            <div className='text-2xl'><b>Profile</b></div>
            {/* <li className='my-1 text-xl'><Link to={"/admin/category"}> <LayoutDashboard /> Category</Link></li> */}
            <li className='my-1 text-xl'><Link to={"/admin/profile-admin"}><CircleUserRound /> Profile</Link></li>
            <li className='my-1 text-xl'><Link to={"/admin/products"}><Gamepad /> Products</Link></li>
            <li className='my-1 text-xl'><Link to={"/admin/order"}><Folder />Order</Link></li>
          </div>

          <div onClick={hdlLogout} className='flex justify-center items-center rounded-md p-2 hover:bg-blue-900 hover:text-white hover:duration-200 active:bg-green-400 '>
            <LogOut />
            <li className="ml-2 text-xl cursor-pointer flex justify-center  h-10 w-80">
              Logout </li>
          </div>

        </ul>
      </div>

    </div>

  )
}
