import React, { useEffect, useRef, useState } from 'react';
import { creatProducts, getProductDetail, updateProducts } from '../../api/ProductsApi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getAccessToken } from '../../utils/LocalStorage';


const initialState = {
    name: '',
    detail: '',
    price: 0.00,
    categoryId: '',
    image: null,
    imagePreview: null,
}

const FromEditProduct = () => {
    const { token, getProduct, editValue } = useAuth()
    const { id } = useParams()
    // const [formData, setFormData] = useState({});
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    const fileRef = useRef()


    const fetchProduct = async () => {
        const token = getAccessToken()
        const resp = await getProductDetail(token, id)
        console.log(resp.data.products)
        setProduct(resp.data.products)
    }

    console.log(product)

    useEffect(() => {
        fetchProduct()
    }, [])

    // useEffect(() => {
    //     const newData = { ...editValue }
    //     newData.image = null
    //     setFormData(newData)
    // }, [])

    const handleChange = (e) => {

        if (e.target.name === 'image') {
            const file = e.target.files[0];
            if (file) {
                setProduct({
                    ...product,
                    image: file,
                    imagePreview: URL.createObjectURL(file),
                });
            }
        } else {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', product.name);
        data.append('detail', product.detail);
        data.append('price', product.price);
        // data.append('categoryId', product.categoryId);

        if (product.image) {
            data.append('image', product.image);
        }



        console.log("FormData: ", product)
        // console.log(token)
        try {

            const result = await updateProducts(token, data, id);

            console.log('Product uploaded:', result);

            // setFormData(initialState);
            navigate("/admin/products")

        } catch (err) {
            console.log('Error uploading product:', err);
        }
    };

    return (
        <div className='flex justify-center container mx-auto p-4 bg-white shadow-md mt-10'>
            <form onSubmit={handleSubmit} >
                <div className='my-5'>
                    <label className='text-3xl'><b>Name: </b></label>
                    <input
                        className='text-3xl '
                        type="text"
                        name="name"
                        value={product?.name}
                        onChange={handleChange}

                    />
                </div>
                <div className='m-5 cursor-pointer' onClick={() => fileRef.current.click()}>
                    <img
                        src={product?.imagePreview || product?.image} />
                    {/* <div className='m-5 w-96 h-auto' >

                        {product?.imagePreview && (
                            <img
                                src={product?.imagePreview}
                                alt="Preview"
                                className=" mt-2 "
                            />

                        )}
                    </div> */}
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        ref={fileRef}
                        onChange={handleChange}
                        className='hidden'
                    />
                </div>
                <div className='m-5 bg-slate-100 flex justify-between items-center h-15 p-4 rounded-md'>
                    <label><b>Price: </b></label>
                    <input
                        className='p-3 h-8 w-[15vw]  flex items-center rounded-sm'
                        type="number"
                        name="price"
                        value={product?.price}
                        onChange={handleChange}

                    />
                </div>
                {/* <div className='m-5'>
                    <label><b>Category:</b></label>
                    <input
                        type="text"
                        name="categoryId"
                        value={product?.categoryId}
                        onChange={handleChange}
                        
                    />
                </div > */}
                <div className=' m-5'>
                    <label><b>Detail:</b></label>
                    <textarea
                        className='mt-1 block w-full h-24 p-2 border border-gray-300 rounded-md bg-slate-100 break-words whitespace-pre-wrap resize-none'
                        name="detail"
                        type="text"
                        value={product?.detail}
                        onChange={handleChange}

                    />
                </div>
                <div className='flex justify-center  m-5'>
                    <div >
                        <button className='bg-blue-900 text-white p-1 px-9 rounded ' type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FromEditProduct;

