import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { currentUser, login, register } from '../api/AuthApi';
import { toast } from 'react-toastify';
import { getAccessToken, removeAccessToken, setAccessToken } from '../utils/LocalStorage';
import { getAllCategory } from '../api/CategoryApi';
import { getProducts } from '../api/ProductsApi';
import { getAllOrderApi, getItemOrder, getOrderApi } from '../api/OrderApi';
import { updateUserProfile } from '../api/UserProfileApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null)
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);
    const [dataUser, setDataUser] = useState(null);
    const [editValue, setEditValue] = useState({})
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
            await register(form);
            toast.success('register success');
        } catch (err) {
            toast.error('try register again');
        }
    };

    const updateProfile = async (form) => {
        console.log('form====', form)
        try {
            await updateUserProfile(form);
            toast.success('updateProfile success');
        } catch (err) {
            toast.error('try updateProfile again');
        }
    };

    const actionLogin = async (form) => {
        try {
            const resp = await login(form);
            console.log(resp.data.user, "hi jukkru")
            setRole(resp.data.role)
            setUser(resp.data.user);
            setAccessToken(resp.data.token);
            setDataUser(resp.data.dataUser)
            localStorage.setItem("user", JSON.stringify(resp.data.user))
            toast.success('Login success');
            return resp.data.user.role;
        } catch (err) {
            toast.error('Login failed. Please try again.');
        }
    };

    const actionLogout = () => {
        localStorage.clear();
        setRole(null);
        setUser(null);
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
        } catch (err) {
            console.log(err);
        }
    };

    const getOrder = async () => {
        try {
            if (role == "USER") {

                const res = await getOrderApi();
                setOrder(res.data.getOrder);
                return
            }
            const res = await getAllOrderApi();
            setOrder(res.data.getAllOrder);

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <AuthContext.Provider
            value={{
                editValue,
                setEditValue,
                user,
                role,
                categories,
                products,
                actionRegister, actionLogin,
                dataUser, actionLogout, getCategory, getProduct,
                fetchUserData, getOrder, order, updateProfile, loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
