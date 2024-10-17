import React from 'react'
import { Link } from 'react-router-dom'
import UserSidebar from './UserSidebar'

export default function UserHeader() {
    return (
        <div className='bg-blue-950 text-white flex h-12 w-full items-center px-4 gap-4'>
            <a className='text-2xl font-bold'>
                LOGO
            </a>
            <div className='flex w-full justify-between'>
                <ul className=' flex items-center gap-4'>
                    <li><Link to={"/user"}>HOME</Link></li>
                    {/* <li><Link to={"/user/category"}>CATEGORY</Link></li> */}
                </ul>

                <div>
                    <ul className='flex gap-4'>
                        <li><Link to={"/user/cart"}>Cart</Link></li>
                        <UserSidebar />
                    </ul>
                </div>
            </div>
        </div>
    )
}
