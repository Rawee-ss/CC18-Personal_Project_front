import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { currentUser, login, register } from '../api/AuthApi';
import { toast } from 'react-toastify';
import { getAccessToken, removeAccessToken, setAccessToken } from '../untils/LocalStorage';
import { getAllCategory } from '../api/CategoryApi';
import { getProducts } from '../api/ProductsApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null)
    const [token, setToken] = useState(null)
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    const fetchUserData =async () => {
        const token = getAccessToken();
        if (token) {
            try {
                const resp = await currentUser(token);
                setUser(resp.data.member.userName);
                setRole(resp.data.member.role);
                setToken(token)
            } catch (err) {
                toast.error('Failed to fetch user data. Please log in again.');
               // actionLogout();
            }
      
        }
    };

    useEffect(() => {
        fetchUserData()
    }, [])


    const actionRegister = async (form) => {
        try {
            const resp = await register(form);
            toast.success('register success');
        } catch (err) {
            toast.error('try register again');
        }
    };

    const actionLogin = async (form) => {
        try {
            const resp = await login(form);
            toast.success('Login success');
            setRole(resp.data.role)
            setUser(resp.data.user);
            setToken(resp.data.token);
            setAccessToken(resp.data.token);
            return resp.data.user.role;
        } catch (err) {
            toast.error('Login failed. Please try again.');
        }
    };

    const actionLogout = () => {
        localStorage.clear();
        setRole(null);
        setUser(null);
        setToken(null);
    };

    const getCategory = async () => {
        try {
            const res = await getAllCategory();
            setCategories(res.data.categories);
        } catch (err) {
            console.log(err);
        }
    };

    const getProduct = async (count) => {
        try {
            const res = await getProducts(count);
            setProducts(res.data.products);
            console.log(res.data.products)
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, role, token, categories, products, actionRegister, actionLogin, actionLogout, getCategory, getProduct }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
