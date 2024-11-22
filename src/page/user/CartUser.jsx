import React, { useState } from 'react'
import CardinProductCart from '../../component/admin/card/CardinProductCart'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


export default function CartUser() {
  const [total, setTotal] = useState(null)
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate()

  const totalPrice = (total) => {
    // console.log(total)
    setTotal(total)
  }

  const hdlCartItem = (item) => {
    // console.log(item)
    setCartItems(item)
  }

  const hdlSubmit = () => {
    if (cartItems.length === 0) {
      toast.error("No items in the cart, Please add products.")
    }
    navigate("/payment")
    toast.success("Create order successfully.")
  }

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems); // อัปเดตรายการสินค้า
    if (updatedCartItems.length === 0) {
      setTotal(0); // ถ้าไม่มีสินค้าแล้ว ให้ราคา total เป็น 0
    }
  };

  return (
    <div >
      <h1 className=' text-blue-900 text-3xl ml-20 mt-10'><b><u>My Cart</u></b></h1>
      <div className='flex justify-between'>

        <div className='w-1/2 p-4 h-screen overflow-y-auto'>

          <CardinProductCart setTotal={totalPrice} setCartItems={hdlCartItem} removeItemFromCart={removeItemFromCart} />

        </div>

        <div className='w-1/3 h-screen overflow-y-auto'>
          <div className='m-4 bg-slate-50 h-96 w-96 rounded border shadow-md '>
            <h1 className="text-xl text-blue-900 flex justify-center p-7"><b>Order</b></h1>
            <div className='flex justify-center'>
              <hr className='bg-slate-200 w-72 mx-14 h-[1.5px] ' />
            </div>
            <div className='flex justify-center m-7 '>
              <input type="radio" checked readOnly className="mr-2" />
              <in className="ml-2 text-blue-900"><b>Transaction Payment</b></in>
            </div>
            <div className='flex justify-center'>
              <hr className='bg-slate-200 w-72 mx-14 h-[1.5px] ' />
            </div>

            <div className='flex justify-between mx-14 mt-24'>
              <h1 className="text-blue-900"><b>Total:</b></h1>
              <h1 className="text-blue-900"><b>฿ {total}</b></h1>
            </div>
            <div className='flex justify-center '>
              {cartItems.length > 0 && total > 0 ? (

                <button onClick={hdlSubmit} className='bg-blue-900 p-2 rounded-md text-white m-8 hover:bg-blue-700'>
                  Confirm order
                </button>

              ) : (
                <button disabled className='bg-gray-500 p-2 rounded-md text-white m-8'>
                  No items in cart
                </button>
              )}</div>


          </div>
        </div>
      </div>
    </div >
  )

}
