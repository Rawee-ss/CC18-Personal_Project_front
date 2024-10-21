import React from 'react'
import CardinProductCart from '../../component/admin/card/CardinProductCart'
import { Link } from 'react-router-dom'
// import { Link } from 'lucide-react'

export default function CartUser() {
  return (
    <div >
      <h1 className=' text-blue-900 text-3xl ml-20'><b><u>My Cart</u></b></h1>
      <div className='flex justify-between'>


        <div className='w-1/2 p-4 h-screen overflow-y-auto'>

          <CardinProductCart/>


        </div>


        <div className='w-1/3 h-screen overflow-y-auto'>
          <div className='m-4 bg-slate-50 h-96 w-96 rounded border shadow-md '>
            <h1 className="text-xl text-blue-900 flex justify-center p-7"><b>Order</b></h1>
            <div className='flex justify-center'>
              <hr className='bg-slate-200 w-72 mx-14 h-[1.5px] ' />
            </div>
            <div className='flex justify-center m-7 '>
              <input type='checkbox' />
              <h1 className="ml-2 text-blue-900"><b>Transaction Payment</b></h1>
            </div>
            <div className='flex justify-center'>
              <hr className='bg-slate-200 w-72 mx-14 h-[1.5px] ' />
            </div>

            <div className='flex justify-between mx-14 mt-24'>
                <h1 className="text-blue-900"><b>Total:</b></h1>
                <h1 className="text-blue-900"><b>฿ </b></h1>
            </div>
            <div className='flex justify-center '>
              <Link to={"/user/payment"}>
            <button className='bg-blue-900 p-2 rounded-md text-white m-8 hover:bg-blue-700'>Confirm order</button>
              </Link>

            </div>


          </div>
        </div>
      </div>
    </div>
  )

}
