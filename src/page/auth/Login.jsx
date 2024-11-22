import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../api/AuthApi';
import { useAuth } from '../../context/AuthContext';




export default function Login() {

    const navigate = useNavigate()
    const { actionLogin } = useAuth()
    const [form, setForm] = useState({
        userName: "",
        password: "",

    })
    const [formErrors, setFormErrors] = useState({})

    const hdlOnChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const hdlOnSubmit = async (e) => {
        e.preventDefault()
        const role = await actionLogin(form)
        // console.log(role)
        if (role) {

            roleRedirect(role)
        }

    }

    const roleRedirect = (role) => {
        console.log(role)
        if (role === "ADMIN") {
            navigate("/admin")
        } else {
            navigate("/")
        }
    }

    return (
        <div className="bg-blue-200 flex w-full h-full p-2">
            <div className='flex items-center justify-center w-full'>
                <div className="bg-blue-50 p-16 flex flex-col items-center rounded-2xl">
                    <p className="text-3xl font-bold mb-8">Login</p>
                    <form onSubmit={hdlOnSubmit} className="flex flex-col space-y-4">
                        <input
                            value={form.userName}
                            name="userName"
                            onChange={hdlOnChange}
                            placeholder="Username"
                            className="p-2 rounded w-64 
              border border-gray-300 shadow-md"
                        />
                        <input
                            value={form.password}
                            type="password"
                            name="password"
                            onChange={hdlOnChange}
                            placeholder="Password"
                            className="p-2 rounded w-64 
              border border-gray-300 shadow-md"
                        />

                        <button
                            className="bg-blue-900 rounded-md
              hover:bg-blue-700 hover:scale-105 hover:duration-200
              font-bold text-white shadow-md p-1"
                        >Login</button>
                        <p className='flex justify-center text-gray-400 text-sm' ><Link to={"/register"}>Create Account?</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
