import { ShoppingCart } from 'lucide-react'
import React from 'react'

const CartProduct = ({ item }) => {
    console.log(item)
    return (
        // <div> CartProduct</div>
        <div className='border rounded-md shadow-md p-2 w-48'>

            <div>
                {
                    item.image
                        ? <img src={item.image}
                            className='rounded-md w-full h-24 object-cover hover:scale-110 hover:duration-200' />
                        : <div className='w-full h-24 bg-gray-200 rounded-md text-center flex items-center justify-center shadow'>
                            No Image
                        </div>
                }

            </div>


            <div className='py-2'>
                <p className='text-xl text-blue-900'>{item.name}</p>

            </div>


            <div className='flex justify-between items-center '>
                <span className='text-sm font-bold text-blue-900'>{item.price}</span>
                <button className='bg-blue-900 rounded-md p-2 text-white hover:bg-blue-700 shadow-md '><ShoppingCart /></button>
            </div>

        </div>


    )
}

export default CartProduct