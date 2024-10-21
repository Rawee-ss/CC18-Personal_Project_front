import React, { useState } from 'react'


export default function OrderUser() {

  return (
    <div className='container mx-auto p-4 bg-white shadow-md my-5'>
      <h1 className=' text-blue-900 text-3xl ml-20'><b><u>Order</u></b></h1>
      <div className="container mx-auto p-6 flex-col justify-center items-center">
        {/* ช่องค้นหา */}
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

        {/* รายการคำสั่งซื้อ */}
        <div className="space-y-4  ">

          <div className="flex justify-between items-center border p-4 rounded-md shadow-sm w-[50vw] h-32">

            <div >
              <h3 className="font-semibold text-lg ">Order</h3>
              <p>No. </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">Date</p>
              <button className="text-blue-600">›</button>
            </div>

          </div>
        </div>
      </div>
    </div>




    // <div>OrderUser</div>
  )
}
