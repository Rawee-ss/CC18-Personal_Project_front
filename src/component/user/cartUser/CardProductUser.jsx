import React from 'react'
import { getAccessToken } from '../../../untils/LocalStorage'
import { createCart } from '../../../api/CartApi'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'


const CardProductUser = ({ item }) => {
    console.log(item)

    const addtoCart = async () => {
        const token = getAccessToken()
        try {
            const resp = await createCart(token, item.id)
            toast.success("Added to cart successfully!")

        } catch (err) {
            console.log(err)
            toast.error("Failed to add to cart.")
        }
    }

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
                <Link to={`/user/products/${item.id}`}>
                    <p className='text-xl text-blue-900 hover:text-blue-600'>{item.name}</p>
                </Link>
            </div>


            <div className='flex justify-between items-center '>
                <span className='text-sm font-bold text-blue-900'>฿ {item.price}</span>
                <button className='bg-blue-900 rounded-md p-2 text-white hover:bg-blue-700 shadow-md ' onClick={addtoCart}><ShoppingCart /></button>
            </div>

        </div>


    )
}

export default CardProductUser