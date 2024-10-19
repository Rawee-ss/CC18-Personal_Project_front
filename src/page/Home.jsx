import React, { useState, useEffect } from 'react'
import { getProducts } from '../api/ProductsApi'
import CartProduct from '../component/admin/cart/CartProduct'




export default function Home() {
  const [products, setProducts] = useState([])

  const getAllProduct = async () => {
    const res = await getProducts()
    console.log(res)
    setProducts(res.data.products)
  }

  useEffect(() => {
    getAllProduct()
  }, [])
  console.log("88888", products)
  return (
    <div>
      <div className='overflow-y-auto'>
        <h1 className=' text-blue-900 text-3xl ml-20 mt-5 '><b><u>Shop</u></b></h1>
        <div className='flex flex-wrap gap-4 m-10'>

          {
            products.map((item, index) =>
              <CartProduct key={index} item={item} />
            )
          }

        </div>

      </div>

    </div>

  )
}
