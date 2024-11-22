import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getAccessToken } from '../../utils/LocalStorage'
import { getProductDetail } from '../../api/ProductsApi'
import { getStore, updateStatus } from '../../api/StoreApi'

const FromStore = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [getItem, setGetItem] = useState(null)
  const [status, setStatus] = useState("")

  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);




  const fecthStore = async () => {
    try {
      const resp = await getStore(id)
      setGetItem(resp.data)

      if (resp?.data?.status === "INSTALL") {

        setStatus("INSTALL")
      } else {

        setStatus("UNINSTALL")
      }

    } catch (error) {
      console.log(error)
    }
  }

  const hdlClick = async () => {
    if (status == "INSTALL") {
      setIsRunning(true)
    }
    // navigate("//store")
  }

  const uninstall = async () => {
    await updateStatus(id, "INSTALL")
    setStatus("INSTALL")
  }

  const installGame = async () => {
    if (progress < 100 && isRunning && status == "INSTALL") {
      setTimeout(() => {
        setProgress((prev) => (prev += 2));
      }, 50);
    } else if (progress == 100) {
      console.log("object")
      await updateStatus(id, "UNINSTALL")
      await fecthStore()
      setTimeout(() => {

        setIsRunning(false);
        setProgress(0);
      }, 1000)
    }
  }

  useEffect(() => {
    fecthStore()
  }, [status])

  useEffect(() => {
    if (status) {

      updateStatus(id, status)
    }
  }, [status])

  useEffect(() => {
    installGame()
  }, [progress, isRunning]);

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

          {isRunning && (
            <div className="relative border w-9/12 ">
              <div
                className="bg-green-500 h-5 transition duration-100"
                style={{ width: `${progress}%` }}
              >
              </div>
              <div className="absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%]">
                {progress}%
              </div>
            </div>
          )}

          <div className="flex justify-center">
            {/* <Link to={"//store"}> */}

            {status == "INSTALL" ? <button onClick={hdlClick} className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              INSTALL
            </button> :
              <button onClick={uninstall} className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                UNINSTALL
              </button>}
            {/* </Link> */}
          </div>
        </div>}

    </div >

  )
}

export default FromStore
