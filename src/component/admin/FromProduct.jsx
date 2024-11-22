import React, { useEffect, useState } from 'react'
import { useAuth, AuthProvider } from '../../context/AuthContext'
import { creatProducts, deleteProduct } from '../../api/ProductsApi'
import UploadProduct from './FromCreateProduct'
import { Link, useNavigate } from 'react-router-dom'
import { getAccessToken } from '../../untils/LocalStorage'
import { Pencil, Trash2 } from 'lucide-react';


const initialState = {
    name: "",
    detail: "",
    price: 0.00,
    categoryId: "",
    image: []
}
const FormProduct = () => {
    const { token, getCategory, categories, getProduct, products,
        setEditValue } = useAuth()
    const [form, setForm] = useState(initialState)
    const [productsItem, setProductsItem] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getCategory(token)
        getProduct(token)
    }, [])
    // console.log(getCategory)


    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await creatProducts(token, form)
            console.log(res)
            setForm(initialState)
            getProduct()
        } catch (err) {
            console.log(err)
        }
    }
    const handleDelete = async (productId) => {
        console.log(productId)
        try {
            const token = getAccessToken();
            console.log(token)
            await deleteProduct(token, productId);

            getProduct(token)
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };
    const handleEdit = (item) => {
        setEditValue(item)
        navigate('/admin/editProduct/' + item.id)
    }
    console.log("object")
    const showProduct = products.filter(item => !item.isDelete)

    return (
        <div>
            <hr />
            <br />
            <table className="table w-full border">
                <thead>
                    <tr className='bg-blue-900 text-white border'>
                        <th scope="col">No.</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        {/* <th scope="col">Category</th> */}
                        <th scope="col" >Manage</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        showProduct.map((item, index) => {
                            // console.log(item)
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {
                                            item.image
                                                ? <img
                                                    className='w-24 h-24 rounded-lg shadow-md'
                                                    src={item.image} />
                                                : <div
                                                    className='w-24 h-24 bg-gray-200 rounded-md 
                                                    flex items-center justify-center shadow-sm'
                                                >No Image</div>
                                        }

                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.detail}</td>
                                    <td>{item.price}</td>
                                    {/* <td>{item.categoryId}</td> */}
                                    <td >
                                        <div className='flex items-center justify-center'>
                                        <button onClick={() => handleEdit(item)}
                                            className='text-white mr-2 bg-yellow-500 rounded-md p-1 hover:scale-105'>
                                            <Pencil />
                                        </button>

                                        <button
                                            className='bg-red-500 rounded-md p-1 shadow-md hover:scale-105 text-white '
                                            onClick={() => handleDelete(item.id)}>
                                            <Trash2 />
                                        </button>
                                        </div>

                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>



        // <div className='container mx-auto p-4 bg-white shadow-md'>
        //     <form onSubmit={handleSubmit}>
        //         <h1 className=' text-blue-900 text-3xl ml-20'><b><u>Products</u></b></h1>
        //         <input
        //             className='border'
        //             value={form.name}
        //             onChange={handleOnChange}
        //             placeholder='Name'
        //             name='name'
        //         />
        //         <input
        //             className='border'
        //             value={form.detail}
        //             onChange={handleOnChange}
        //             placeholder='Detail'
        //             name='detail'
        //         />
        //         <input
        //             className='border'
        //             type='number'
        //             value={form.price}
        //             onChange={handleOnChange}
        //             placeholder='Price'
        //             name='price'
        //         />
        //         <select
        //             className='border'
        //             value={form.categoryId}
        //             onChange={handleOnChange}
        //             name='categoryId'
        //             required
        //         >
        //             <option value='' disabled>Select Category</option>
        //             {categories && categories.map((category) => (
        //                 <option key={category.id} value={category.id}>
        //                     {category.name}
        //                 </option>
        //             ))}
        //         </select>
        //         <button type='submit' className='bg-blue-500 text-white'>
        //             Submit
        //         </button>
        //     </form>
        // </div>
    )
}

export default FormProduct