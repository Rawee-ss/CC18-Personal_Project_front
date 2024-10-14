import React, { useState } from 'react';
import { creatProducts } from '../../api/ProductsApi';


const initialState = {
  name: '',
  detail: '',
  price: '',
  categoryId: '',
  image: null,
  imagePreview: null
}

const UploadProduct = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      if (file) {
        setFormData({
          ...formData,
          image: file,
          imagePreview: URL.createObjectURL(file), 
        });
      }
    } else {

      setFormData({ ...formData, [name]: value });
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

    try {
      const result = await creatProducts(data);
      console.log('Product uploaded:', result);
      setFormData(initialState);
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div className='flex justify-center '>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
            />
          </div >
          <label>Detail:</label>
          <textarea
            className='mt-1 block w-full h-24 p-2 border border-gray-300 rounded-md bg-red-100 break-words whitespace-pre-wrap resize-none'
            name="detail"
            type="text"
            value={formData.detail}
            onChange={handleChange}
            required
          />
        </div>
        <button className='bg-blue-900 text-white p-1 px-9 rounded' type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadProduct;
