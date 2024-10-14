import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function UserSidebar() {
  const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate()
  const { actionLogout } = useAuth()
  const hdlLogout = () => {
    actionLogout
    navigate("/")
  }
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer btn-primary">PROFILE USER</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <div>Profile</div>
          <li><Link to={"/user/profile"}>Profile</Link></li>
          <li><Link to={"/user/store"}>Store</Link></li>
          <li><Link to={"/user/favorite"}>Favorite</Link></li>
          <li><Link to={"/user/order"}>Order</Link></li>
          <li onClick={hdlLogout} className="py- px-3 cursor-pointer rounded-sm hover:bg-neutral-700 hover:duration-200 active:bg-green-400">
            Log Out </li>
        </ul>




      </div>

    </div>


  )
}
