import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { listCategory } from '../api/Category';
import { listProduct, searchFilters } from '../api/product';

const EcomContext = createContext();

export const EcomProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const actionLogin = async (form) => {
    const res = await axios.post('http://localhost:8000/login', form);
    setUser(res.data.payload);
    setToken(res.data.token);
    return res;
  };

  const getCategory = async () => {
    try {
      const res = await listCategory();
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProduct = async (count) => {
    try {
      const res = await listProduct(count);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const actionSearchFilters = async (arg) => {
    try {
      const res = await searchFilters(arg);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EcomContext.Provider
      value={{
        user,
        token,
        categories,
        products,
        actionLogin,
        getCategory,
        getProduct,
        actionSearchFilters
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

// Hook สำหรับใช้ใน component อื่น
export const useEcomStore = () => {
  return useContext(EcomContext);
};
