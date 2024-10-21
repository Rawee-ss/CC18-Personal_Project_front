import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { createCart } from '../../../api/CartApi'
import { getAccessToken } from '../../../untils/LocalStorage'

const CardProduct = ({ item }) => {
    console.log(item)

    const addtoCart = async () => {
        const token = getAccessToken()
        
        try{

            const resp = await createCart(token, item.id)
        }catch(err){
            console.log(err)
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
                <p className='text-xl text-blue-900'>{item.name}</p>

            </div>


            <div className='flex justify-between items-center '>
                <span className='text-sm font-bold text-blue-900'>฿ {item.price}</span>
                <button className='bg-blue-900 rounded-md p-2 text-white hover:bg-blue-700 shadow-md ' onClick={addtoCart}><ShoppingCart /></button>
            </div>

        </div>


    )
}

export default CardProduct