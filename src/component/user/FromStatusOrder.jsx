import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getItemOrder, updateOrderStatus } from "../../api/OrderApi"
import { toast } from "react-toastify"
import { getAccessToken } from "../../untils/LocalStorage"


const FromStatusOrder = () => {
  const [paymentStatus, setPaymentStatus] = useState('PENDING')
  const [order, setOrder] = useState([])
  const [orderId, setOrderId] = useState(null)
  const [totalPrice, setTotalPrice] = useState([])
  const [slip, setSlip] = useState()
  const navigate = useNavigate()


  // const hdlSaveOrder = async () => {
  //   console.log("click")

  //   const data = new FormData()
  //   data.append("paymentStatus", paymentStatus)
  //   data.append("ordersId", orderId)
  //   console.log(orderId)
  //   try {
  //     await updateOrderStatus(data, id)
  //     navigate("/admin/order")
  //     toast.success("Update success")
  //   } catch (err) {
  //     toast.error("Recording failed")
  //   }
  // }


  const { id } = useParams();

  const fetchOrderItem = async (id) => {

    const token = getAccessToken()
    const resp = await getItemOrder(id)
    console.log(resp.data)
    setOrder(resp.data.orderItem)
    // console.log(resp.data.ordersId)
    setOrderId(resp.data.ordersId)
    // console.log(resp.data.paymentStatus)
    setPaymentStatus(resp.data.paymentStatus)
    // console.log(resp.data.totalPrice)
    setTotalPrice(resp.data.totalPrice)
    // console.log(resp.data.slip)
    setSlip(resp.data.slip)
  }

  useEffect(() => {

    fetchOrderItem(id);

  }, [])
  console.log(order)
  console.log(paymentStatus)
  console.log(totalPrice)

  return (
    <div >
      <h1 className=' text-blue-900 text-3xl mt-6 ml-20'><b><u>Payment</u></b></h1>
      <div className=" flex justify-center ">
        <div className="bg-slate-50 rounded-lg shadow-lg p-10 mt-10 mx-20 w-[50vw] h-auto">
          <h2 className="text-xl font-semibold mb-6">Order</h2>

          {order.map((item) =>
            <div key={item.id}>
              <h2 className="text-l font-semibold "> No. {item.id}</h2>
              <div  >
                < div className="space-y-4 my-3" >
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

                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between text-lg font-medium mt-14">
            <p>Total:</p>
            <p>฿ {totalPrice}
            </p>
          </div>

          <div className="my-4">
            <label className="block font-medium text-gray-700 mb-2">Transaction Payment</label>
            <input type="radio" checked readOnly className="mr-2" /> Transaction Payment
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2">Slip</label>
            <div className="flex items-center border border-dashed border-gray-400 p-2 rounded-md">

              <img
                src={slip}
                alt="img-slip"
                className="flex-1 text-gray-600 text-center cursor-pointer"
              />

            </div>
          </div>

          <div className='flex justify-center items-center my-4'>
            <label className='text-lg font-bold mr-2 text-green-500'>Status: {paymentStatus}</label>
          </div>

          <div className="flex justify-center items-center ">
        <Link to={"/user/order"}>
        <button className="bg-blue-900 rounded-md text-white font-semibold w-16 h-10 hover:bg-blue-700">Order</button>
        </Link>
      </div>
         
        </div >
      </div >
     
    </div >
  )
}

export default FromStatusOrder
