import React, { useEffect, useState } from 'react';
import { creatProducts } from '../../api/ProductsApi';
import { Link } from 'react-router-dom';


const initialState = {
  name: '',
  detail: '',
  price: '',
  categoryId: '',
  image: null,
  imagePreview: null,
}

const UploadProduct = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {

    if (e.target.name === 'image') {
      const file = e.target.files[0];
      if (file) {
        setFormData({
          ...formData,
          image: file,
          imagePreview: URL.createObjectURL(file),
        });
      }
    } else {

      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('detail', formData.detail);
    data.append('price', formData.price);
    data.append('categoryId', formData.categoryId);
    data.append('image', formData.image);

    console.log("FormData: ", formData)

    try {
      const result = await creatProducts(data);
      console.log('Product uploaded:', result);
      setFormData(initialState);
    } catch (err) {
      console.log('Error uploading product:', err);
    }
  };

  return (
    <div className='flex justify-center container mx-auto p-4 bg-white shadow-md mt-10'>
      <form onSubmit={handleSubmit} >
        <div className='my-5'>
          <label className='text-3xl'><b>Name:</b></label>
          <input
            className='text-3xl '
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='m-5' >
          <label>Image:</label>
          {formData.imagePreview && (
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="w-50 h-50  mt-2"
            />
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <div className='m-5 bg-slate-100 flex justify-between items-center h-15 p-4 rounded-md'>
          <label><b>Price:</b></label>
          <input 
          className='p-3 h-8 w-[10vw] bg-green-500  text-white flex items-center rounded-sm'
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className='m-5'>
          <label><b>Category:</b></label>
          <input
            type="text"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          />
        </div >
        <div className=' m-5'>
          <label><b>Detail:</b></label>
          <textarea
            className='mt-1 block w-full h-24 p-2 border border-gray-300 rounded-md bg-slate-100 break-words whitespace-pre-wrap resize-none'
            name="detail"
            type="text"
            value={formData.detail}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex justify-between m-5'>
        <button className='bg-blue-900 text-white p-1 px-9 rounded ' type="submit">Upload</button>
        <button className='bg-red-700 text-white p-1 px-9 rounded ' type="submit"><Link to={"/admin/products"}>Cancle</Link></button>
        </div>
      </form>
    </div>
  );
};

export default UploadProduct;
