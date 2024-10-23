import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAccessToken } from "../../untils/LocalStorage";
import { createCart } from "../../api/CartApi";
import { toast } from "react-toastify";
import { getProductDetail } from "../../api/ProductsApi";

const FromProductDetailUser = ({ item }) => {
  console.log(item)
  const [product, setProduct] = useState([])
  const { id } = useParams()


  const addtoCart = async () => {
    const token = getAccessToken()
    try {
      const resp = await createCart(token, item.id)
      toast.success("Added to cart successfully!")
    } catch (err) {
      console.log(err)
      toast.error("Failed to add to cart.")
    }
  }


  const findProduct = async () => {
    const token = getAccessToken()
    try {
      const resp = await getProductDetail(token, id)
      console.log(resp.data.products)
      setProduct(resp.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    findProduct()
  }, [])



  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col items-center h-auto w-[60vw]">

        <h1 className="text-2xl font-bold text-blue-900 mb-4">{product.name}</h1>

        <img className=" rounded-md mb-4 bg-slate-200 h-[50vh] w-[60vw]" src={`${product.image}`} />

        <div className="w-full flex justify-end items-center mb-4 ">
          <Link to={"/user"}>
            <button className="flex justify-center items-centertext-xl font-semibold text-white hover:bg-green-500 bg-green-600 rounded-sm p-2 h-10 w-auto" onClick={addtoCart}>฿ {product.price}</button>
          </Link>
        </div>

        <div >
          <h2 className="flex justify-start text-lg font-semibold text-blue-900 mb-2 "><u>Introduction</u></h2>
        </div>

        <div className='h-auto w-full '>
          <p className="text-blue-900 ">
            {product.detail} </p>
        </div>
      </div>
      <Link to={"/user"}>
        <button className='m-10 rounded-md p-2 h-9 w-16 text-white bg-blue-900 flex justify-center items-center hover:bg-blue-800'>Home</button>
      </Link>
    </div>
  );
};

export default FromProductDetailUser
