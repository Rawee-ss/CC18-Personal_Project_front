import React from 'react'
import { Link } from 'react-router-dom'
import UserSidebar from './UserSidebar'
import QuegosLogo from "../../image/QuegosLogo.png"
import { ShoppingCart } from 'lucide-react';


export default function UserHeader() {
    return (
        <div className='bg-blue-950'>
            <div className=' text-white flex justify-between h-20 w-full items-center px-4 gap-4 '>


                <div className='h-32 w-32 m-6'>
                    <Link to={"/user"}>
                        <img src={QuegosLogo} alt='Logo' />
                    </Link>
                </div>


                {/* <a className='text-2xl font-bold'>
                LOGO
            </a> */}
                {/* <div className='flex w-full justify-between'>
                <ul className=' flex items-center gap-4'>
                    <li><Link to={"/user"}>HOME</Link></li> */}
                {/* <li><Link to={"/user/category"}>CATEGORY</Link></li> */}
                {/* </ul> */}

                <div>
                    <ul className='flex gap-4 m-10'>
                        <li><Link to={"/user/cart"}><ShoppingCart/></Link></li>
                        <UserSidebar />
                    </ul>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
