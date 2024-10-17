import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { SlLogout } from "react-icons/sl";
import { IoFileTrayOutline } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";

export default function AdminSidebar() {

  // const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate()
  const { actionLogout } = useAuth()
  const hdlLogout = () => {
    actionLogout()
    navigate("/")
  }


  return (

    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer btn-primary">PROFILE ADMIN</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex justify-between">
          <div>
          <div className='text-2xl'><b>Profile</b></div>
          <li className='my-1 text-xl'><Link to={"/admin/products"}><IoFileTrayOutline /> Products</Link></li>
          <li className='my-1 text-xl'><Link to={"/admin/order"}><FaRegFolder />Order</Link></li>
          </div>

          <div>
          <li onClick={hdlLogout} className="text-xl cursor-pointer flex justify-center rounded-md h-10 w-80 hover:bg-blue-900 hover:text-white hover:duration-200 active:bg-green-400">
          <b>Logout</b> </li>
          </div>

        </ul>
      </div>

    </div>

  )
}
