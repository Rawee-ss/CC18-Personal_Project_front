import React, { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';


export default function OrderUser() {

  const { getOrder, order } = useAuth()
  console.log('order here', order)

  useEffect(() => {
    getOrder()
  }, [])

  return (
    <div className='p-4 bg-white  my-5 '>
      <h1 className=' text-blue-900 text-3xl ml-20'><b><u>Order</u></b></h1>
      <div className="mt-10  p-6 flex flex-col justify-center items-center">
        {order.map(item => (
          <Link to={`/order/status-payment/${item.id}`}>
            <div key={item.id} className="m-3 hover:scale-105 flex h-48 justify-center items-center p-4 rounded-lg shadow-md bg-slate-50 border w-[50vw] ">
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-2xl mb-5">Order</h3>
                <p>No. {item.id}</p>
              </div>
              <div className="text-right flex-1 ">
                <p className="text-sm text-gray-500 mr-5 mb-2">Date: {new Date(item.updatedAt).toLocaleDateString("en-GB")}</p>
                <button className="text-blue-900 hover:text-blue-600 w-10 h-10"><ChevronRight /></button>
                <p className={`${item.paymentStatus === "PENDING" ? "text-black" : item.paymentStatus === "COMPLETED" ? "text-green-500" : "text-red-500"}  mr-5`}>Status: {item.paymentStatus}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>





  )
}
