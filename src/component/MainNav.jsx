import React from 'react'
import { Link } from 'react-router-dom'
import QuegosLogo from "../image/QuegosLogo.png"
import { useAuth } from '../context/AuthContext'
import { ShoppingCart } from 'lucide-react'
import UserSidebar from './user/UserSidebar'

export default function MainNav() {
  const { user } = useAuth()
  return (
    <div className='bg-blue-950'>
      <div className=' text-white flex justify-between h-20 w-full items-center px-4 gap-4'>
        <div className='h-32 w-32 m-6'>
          <Link to={"/"}>
            <img src={QuegosLogo} alt='Logo' />
          </Link>
        </div>

        <div>
          <ul className='flex gap-4 m-10'>

            {!user ? <li><Link to={"/login"}>LOGIN</Link></li> :

              <>
                <li><Link to={"/cart"}><ShoppingCart /></Link></li>
                <UserSidebar />
              </>

            }
          </ul>
        </div>
      </div>
    </div>
  )
}
