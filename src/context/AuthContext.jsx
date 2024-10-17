import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { currentUser, login, register } from '../api/AuthApi';
import { toast } from 'react-toastify';
import { getAccessToken, removeAccessToken, setAccessToken } from '../untils/LocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null)
    // const [token, setToken] = useState(null)
 

    const fetchUserData = useCallback(async () => {
        const token = getAccessToken();
        if (token) {
            try {
                const resp = await currentUser(token);
                setUser(resp.data.user);
                setRole(resp.data.role);
            } catch (err) { 
                toast.error('Failed to fetch user data. Please log in again.');
                actionLogout();
            }
            fetchUserData()
        }
    }, []);


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
            // setToken(resp.data.token);
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
        // setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{ user, role, actionRegister, actionLogin, actionLogout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
