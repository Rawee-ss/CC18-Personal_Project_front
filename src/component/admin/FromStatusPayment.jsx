import React, { useEffect, useState } from 'react'
import { saveOrder } from '../../api/OrderApi';
import { getAccessToken } from '../../untils/LocalStorage';
import { getCart } from '../../api/CartApi';

const FromStatusPayment = () => {
  const [slip, setSlip] = useState(null);
  const [cart, setCart] = useState([])
  const [cartId, setCartId] = useState(null)
  const [status, setStatus] = useState('PENDING')

  const handleSlipUpload = (e) => {
    setSlip(e.target.files[0]);
  };

  const hdlSaveOrder = async () => {
    console.log("click")
    console.log(slip)
    const data = new FormData()
    data.append("image", slip)
    data.append("cart", cartId)
    data.append("totalPrice", totalPrice)
    await saveOrder(data)
    setStatus('PENDING')
  }

  useEffect(() => {
    const fetchCart = async () => {
      const token = getAccessToken()
      const resp = await getCart(token)
      console.log(resp.data)
      setCartId(resp.data.cartId)
      setCart(resp.data.cartItem)
    }
    fetchCart()
  }, [])

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price
  }, 0)
  console.log(cartId)
  return (
    <div >
      <h1 className=' text-blue-900 text-3xl mt-6 ml-20'><b><u>Payment</u></b></h1>
      <div className=" flex justify-center ">
        <div className="bg-slate-50 rounded-lg shadow-lg p-10 mt-10 mx-20 w-[50vw] h-auto">
          <h2 className="text-xl font-semibold mb-6">Order</h2>
          <h2 className="text-l font-semibold "> No. </h2>
          {cart.map((item) =>
            <div key={item.id}>

              {/* Order Items */}
              < div className="space-y-4 my-3" >
                {/* Item */}
                <div className="flex items-center justify-between" >
                  <div className="flex items-center">
                    <img
                      src={item.products.image}
                      alt="img"
                      className="w-16 h-16 rounded-md bg-slate-200"
                    />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium">{item.products.name}</h3>

                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium">฿ {item.products.price}</p>
                    {/* <button className="ml-4 text-gray-400 hover:text-red-600">
                <Trash2 />
              </button> */}
                  </div>
                </div>
              </div>

            </div>

          )}

          {/* Total */}
          <div className="flex justify-between text-lg font-medium mt-14">
            <p>Total:</p>
            <p>฿
              {totalPrice}
            </p>
          </div>


          <div className="my-4">
            <label className="block font-medium text-gray-700 mb-2">Transaction Payment</label>
            <input type="radio" checked readOnly className="mr-2" /> Transaction Payment
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2">Slip</label>
            <div className="flex items-center border border-dashed border-gray-400 p-2 rounded-md">

              <image
                htmlFor="slip"
                className="flex-1 text-gray-600 text-center cursor-pointer"
              >
                {slip ? slip.name : 'Slip'}
              </image>
              {/* <span className="text-blue-500 text-xl ml-2"></span> */}
            </div>
          </div>

          {/* <div className='flex  justify-center items-center'>
           status
          </div> */}

          <div className='flex justify-center items-center my-4'>
            <p className="text-lg font-bold">Status: <span className={`ml-2 ${status === 'PENDING' ? 'text-green-600' : 'text-red-600'}`}>{status}</span></p>
          </div>


          <div className="mt-10 flex ">
            <div className="w-full mx-5">
              {/* <Link to={"/user/bill"}> */}
              <button onClick={hdlSaveOrder} className="w-full  bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700" >
                Confirm order
              </button>
              {/* </Link> */}
            </div>
            <div className="w-full">
              {/* <Link to={"/user/cart"}> */}
              <button className="w-full bg-red-800 text-white py-2 px-4 rounded hover:bg-red-500">
                Cancle
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}

export default FromStatusPayment
