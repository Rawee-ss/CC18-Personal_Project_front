import React, { useState, useEffect } from 'react'
import { getProducts } from '../api/ProductsApi'
import CardProduct from './CardProduct'
import { useAuth } from '../context/AuthContext'




export default function Home() {
  const [products, setProducts] = useState([])

  const { role } = useAuth()
  console.log(role, "ROLE")


  const getAllProduct = async () => {
    const res = await getProducts()
    setProducts(res.data.products)
  }

  useEffect(() => {
    getAllProduct()
  }, [])
  // console.log("88888", products)
  return (
    <div>
      <div className='overflow-y-auto'>
        <h1 className=' text-blue-900 text-3xl ml-20 mt-5 '><b><u>Shop</u></b></h1>
        <div className='flex flex-wrap gap-4 m-10'>
          {
            products.map((item, index) =>

              <CardProduct key={index} item={item} role={role} />

            )
          }

        </div>

      </div>

    </div>

  )
}
