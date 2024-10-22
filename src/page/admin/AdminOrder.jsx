import React from 'react'
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function AdminOrder() {
  return (
    <div className='p-4 bg-white  my-5 '>
      <h1 className=' text-blue-900 text-3xl ml-20'><b><u>Order</u></b></h1>
      <div className="mt-10  p-6 flex flex-col justify-center items-center">
      
        <div className="flex items-center mb-4 w-[50vw] h-10">
          <input
            type="search"
            placeholder="Search"
            className="border rounded-md p-2 flex-grow "
          />
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md ml-2 ">
            Search
          </button>
        </div>

       
        <div className=" hover:scale-105 flex h-48 justify-center items-center p-4 rounded-lg shadow-md bg-slate-50 border w-[50vw] ">
          <div className="ml-4 flex-1">
          <h3 className="font-bold text-2xl mb-5">Order</h3>
          <p>No. </p>
          </div> 
          <div className="text-right flex-1 ">
            <p className="text-sm text-gray-500 mr-5 mb-2">Date</p>
            <Link to={"/admin/status-payment"}>
            <button className="text-blue-900 hover:text-blue-600 w-10 h-10"><ChevronRight /></button>
            </Link>
            <p className='text-green-500 mr-5'>Status</p>
          </div>
        </div>
      </div>
    </div>
  )
}
