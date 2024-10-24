import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAccessToken } from '../../untils/LocalStorage'
import { getProductDetail } from '../../api/ProductsApi'
import { getStore, updateStatus } from '../../api/StoreApi'

const FromStore = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [getItem, setGetItem] = useState(null)
  const [status, setStatus] = useState("")

  // const findProduct = async () => {
  //   const token = getAccessToken()
  //   try {
  //     const resp = await getProductDetail(token, id)
  //     console.log(resp.data.products)
  //     setProduct(resp.data.products)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  console.log('getItem', getItem)
  console.log('status', status)

  const fecthStore = async () => {
    try {
      const resp = await getStore(id)
      console.log("resp", resp)
      setGetItem(resp.data)
      console.log('getItem?.status', getItem?.status)

      if(resp.data.status === "INSTALL") {
        setStatus("UNINSTALL")
      } else {
        setStatus("INSTALL")
      }

} catch (error) {
  console.log(error)
}
  }

  const hdlClick = async () => {

    console.log('hdlClick status', status)

    await updateStatus(id, status)
    fecthStore()
  }

  useEffect(() => {
    // findProduct(id)
    fecthStore()
  }, [])

  return (
    <div className='flex justify-center items-center'>

      {getItem &&
      <div className="container w-[70vw] flex flex-col justify-center items-center p-6 bg-slate-50 shadow-lg rounded-lg">

        <img
          src={`${getItem.products.image}`}
          alt="image"
          className="w-[45vw] h-[40vh] rounded-md my-4 bg-slate-200 "
        />

        <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">
          {getItem.products.name}
        </h2>

        <div className="flex justify-center">
          <Link to={"/user/store"}>
            <button onClick={hdlClick} className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              {status}
            </button>
          </Link>
        </div>
      </div>}

    </div>

  )
}

export default FromStore
