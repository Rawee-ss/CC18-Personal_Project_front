import React from 'react'
import { Link } from 'react-router-dom'
import QuegosLogo from "../image/QuegosLogo.png"

export default function MainNav() {
  return (
    <div className='bg-blue-950'>
      <div className=' text-white flex justify-between h-20 w-full items-center px-4 gap-4'>
        <div className='h-32 w-32 m-6'>
          <Link to={"/"}>
          <img src={QuegosLogo} alt='Logo' />
          </Link>
        </div>
        {/* <a className='text-2xl font-bold'>
        LOGO
      </a> */}
        {/* <div className='flex w-full justify-between'>
        <ul className=' flex items-center gap-4'>
          <li><Link to={"/"}>HOME</Link></li> */}
        {/* </ul> */}
        {/* </div> */}

        <div>
          <ul className='flex gap-4 m-10'>
            <li><Link to={"/login"}>LOGIN</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
