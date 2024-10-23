import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { createCart } from '../../../api/CartApi'
import { getAccessToken } from '../../../untils/LocalStorage'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const CardProductAdmin = ({ item }) => {
    console.log(item)

    return (

        <div className='border rounded-md shadow-md p-2 w-48 hover:scale-110'>

            <div>
                {
                    item.image
                        ? <img src={item.image}
                            className='rounded-md w-full h-24 object-cover  hover:duration-200' />
                        : <div className='w-full h-24 bg-gray-200 rounded-md text-center flex items-center justify-center shadow'>
                            No Image
                        </div>
                }

            </div>


            <div className='py-2'>
                <Link to={`/admin/product/${item.id}`}>
                    <p className='text-xl text-blue-900 hover:text-blue-600'>{item.name}</p>
                </Link>
            </div>


            <div className='flex justify-end items-center '>
                <span className='text-sm font-bold text-blue-900'>฿ {item.price}</span>
            </div>

        </div>


    )
}

export default CardProductAdmin