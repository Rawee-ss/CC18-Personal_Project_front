import React from 'react'
import { Link } from 'react-router-dom'

const FromBill = () => {
    return (
        <div>
            <h1 className=' text-blue-900 text-3xl mt-6 ml-20'><b><u>My Bill</u></b></h1>
            <div className=" flex justify-center ">
                <div className="bg-slate-50 rounded-lg shadow-lg p-10 mt-20 mx-20 w-[50vw] h-auto">
                    <h2 className="flex justify-center text-xl font-semibold mb-6">Bill</h2>

                    {/* Order Items */}
                    <div className="space-y-4">
                        {/* Item  */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img
                                   
                                    className="w-16 h-16 rounded-md bg-slate-200"
                                />
                                <div className="ml-4">
                                    <h3 className="text-sm font-medium">Name Product</h3>

                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm font-medium">฿ 32.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between text-lg font-medium mt-36">
                        <p>Total:</p>
                        <p>$75.52</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link to={"/user/order"}>
                    <button className='bg-blue-900 text-white p-3 rounded-md shadow-md hover:bg-blue-700'>Order</button>
                </Link>
            </div>
        </div>
    )
}

export default FromBill
