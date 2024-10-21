import React, { useState } from 'react'
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { saveOrder } from '../../api/OrderApi';



const FromPayment = () => {
    const [slip, setSlip] = useState(null);

    const handleSlipUpload = (e) => {
      setSlip(e.target.files[0]);
    };

    const hdlSaveOrder = async () => {
      console.log("click")
      console.log(slip)
    }

  return (
    <div >
    <h1 className=' text-blue-900 text-3xl mt-6 ml-20'><b><u>Payment</u></b></h1>
    <div className=" flex justify-center ">
      <div className="bg-slate-50 rounded-lg shadow-lg p-10 mt-10 mx-20 w-[50vw] h-auto">
        <h2 className="text-lg font-semibold mb-6">Order summary</h2>

        {/* Order Items */}
        <div className="space-y-4">
          {/* Item 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="img"
                className="w-16 h-16 rounded-md bg-slate-200"
              />
              <div className="ml-4">
                <h3 className="text-sm font-medium">Name Product</h3>

              </div>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-medium">฿ 32.00</p>
              <button className="ml-4 text-gray-400 hover:text-red-600">
                <Trash2 />
              </button>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between text-lg font-medium mt-14">
          <p>Total</p>
          <p>฿ 75.52</p>
        </div>


        <div className="my-4">
          <label className="block font-medium text-gray-700 mb-2">Transaction Payment</label>
          <input type="radio" checked readOnly className="mr-2" /> Transaction Payment
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">Upload Slip</label>
          <div className="flex items-center border border-dashed border-gray-400 p-2 rounded-md">
            <input
              type="file"
              className="hidden"
              id="upload-slip"
              onChange={handleSlipUpload}
            />
            <label
              htmlFor="upload-slip"
              className="flex-1 text-gray-600 text-center cursor-pointer"
            >
              {slip ? slip.name : 'Upload Slip'}
            </label>
            <span className="text-blue-500 text-xl ml-2"></span>
          </div>
        </div>



        {/* Confirm Button */}
        <div className="mt-10 flex ">
          <div className="w-full mx-5">
            {/* <Link to={"/user/bill"}> */}
              <button className="w-full  bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={hdlSaveOrder}>
                Confirm order
              </button>
            {/* </Link> */}
          </div>
          <div className="w-full">
            <Link to={"/user/cart"}>
              <button className="w-full bg-red-800 text-white py-2 px-4 rounded hover:bg-red-500">
                Cancle
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FromPayment
