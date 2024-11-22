import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { currentUser, login, register } from '../api/AuthApi';
import { toast } from 'react-toastify';
import { getAccessToken, removeAccessToken, setAccessToken } from '../untils/LocalStorage';
import { getAllCategory } from '../api/CategoryApi';
import { getProducts } from '../api/ProductsApi';
import { getAllOrderApi, getItemOrder, getOrderApi } from '../api/OrderApi';
import { updateUserProfile } from '../api/UserProfileApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null)
    const [token, setToken] = useState(null)
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);
    const [dataUser, setDataUser] = useState(null);
    const [editValue, setEditValue] = useState({})
    const [itemOrder, setItemOrder] = useState([]);
    const [loading, setLoading] = useState(false)


    const fetchUserData = async () => {
        const token = getAccessToken();
        console.log(token, "TOKEN")
        if (token) {
            try {
                setLoading(true)
                const resp = await currentUser(token);
                console.log(resp, "FETCH DATA")
                setUser(resp.data.member.userName);
                setDataUser(resp.data.member)
                setRole(resp.data.member.role);
                setToken(token)
                return resp
            } catch (err) {
                toast.error('Failed to fetch user data. Please log in again.');
                // actionLogout();
            } finally {
                setLoading(false)
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

    const updateProfile = async (form) => {
        console.log('form====', form)
        try {
            const resp = await updateUserProfile(form);
            toast.success('updateProfile success');
        } catch (err) {
            toast.error('try updateProfile again');
        }
    };

    const actionLogin = async (form) => {
        try {
            const resp = await login(form);
            console.log(resp.data.user, "hi jukkru")
            toast.success('Login success');
            setRole(resp.data.role)
            setUser(resp.data.user);
            setToken(resp.data.token);
            setAccessToken(resp.data.token);
            setDataUser(resp.data.dataUser)
            localStorage.setItem("user", JSON.stringify(resp.data.user))
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
        setDataUser(null)
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

    const getOrder = async () => {
        try {
            const res = await getOrderApi();
            setOrder(res.data.getOrder);
            console.log(res.data.getOrder)
        } catch (err) {
            console.log(err);
        }
    };

    const getAllOrder = async () => {
        try {
            const res = await getAllOrderApi();
            setOrder(res.data.getAllOrder);
            console.log(res.data.getAllOrder)
        } catch (err) {
            console.log(err);
        }
    };

    console.log(dataUser, 'datauser-context')
    return (
        <AuthContext.Provider
            value={{
                editValue,
                setEditValue,
                user,
                role,
                token,
                categories,
                products,
                actionRegister, actionLogin,
                dataUser, actionLogout, getCategory, getProduct,
                fetchUserData, getOrder, order, updateProfile, getAllOrder, loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
