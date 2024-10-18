import React, { useEffect, useState } from 'react'
import { useAuth, AuthProvider } from '../../context/AuthContext'
import { creatProducts, deleteProduct } from '../../api/ProductsApi'
import UploadProduct from './FromCreateProduct'
import { Link } from 'react-router-dom'



const initialState = {
    name: "",
    detail: "",
    price: 0.00,
    categoryId: "",
    image: []
}
const FormProduct = () => {

    const { token, getCategory, categories, getProduct, products } = useAuth()

    const [form, setForm] = useState(initialState)

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
    const handleDelete = async (id) => {
        if (window.confirm('Confirm Delete?')) {
            try {
                const res = await deleteProduct(token, id)
                console.log(res)
                getProduct()
            } catch (err) {
                console.log(err)
            }

        }
    }


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
                        <th scope="col">Category</th>
                        <th scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((item, index) => {
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
                                    <td>{item.categoryId}</td>
                                    <td className='flex gap-2 justify-center items-center'>
                                        <p className='flex justify-center items-center bg-yellow-500 rounded-md p-1 hover:scale-105'>
                                            <Link to={'/admin/product/' + item.id}>
                                                {/* <Pencil /> */}Edit
                                            </Link>
                                        </p>

                                        <p
                                            className='bg-red-500 rounded-md p-1 shadow-md hover:scale-105 '
                                            onClick={() => handleDelete(item.id)}>
                                            {/* <Trash /> */}
                                            Delete

                                        </p>

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