import React, { useState, useEffect } from 'react'
import { getProducts } from '../api/ProductsApi'


export default function Home() {
  const [products, setProducts] = useState([])
  const getAllProduct = async () => {
    const res = await getProducts()
    console.log(res)
    setProducts(res.data)
  }
  useEffect(() => {
    getAllProduct()
  }, [])

  return (
    <div>

      {/* {products.map((item) => <div key={item.id}>{item.name}</div>)} */}

    </div>

  )
}
