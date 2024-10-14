import React, { useState } from 'react'
import validateRegister from '../../untils/Validator'
import { register } from "../../api/AuthApi"
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

function Register() {
  const { actionRegister } = useAuth()
  const [form, setForm] = useState(initialState)
  const [formErrors, setFormErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate()

  const hdlOnChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const hdlOnSubmit = async (e) => {
    e.preventDefault()
    const error = validateRegister(form)
    if (error) {

      return setFormErrors(error)
    }
    console.log("Registration successful:", form);
    try {
      await actionRegister(form);
      setSuccessMessage("Registration successful!");
      navigate('/login')
      setForm(initialState);
      setFormErrors({});
    } catch (err) {
      setFormErrors("Registration failed. Please try again.")
    }
  }

  return (
    <div className='bg-blue-200 flex w-full h-full p-2'>

      <div className='flex items-center justify-center w-full'>

        <div className='bg-blue-50 p-16 flex flex-col items-center rounded-2xl'>

          <p className='text-3xl mb-8 font-bold'>Register</p>
          <form onSubmit={hdlOnSubmit} className='flex flex-col space-y-2 '>
            <h1><b>USERNAME</b></h1>
            <input value={form.userName} name="userName" type="text" onChange={hdlOnChange} className='p-2 rounded w-64 border border-gray-300 shadow-md'></input>
            {
              formErrors.userName && (
                <span className='text-red-600'>{formErrors.userName}</span>
              )
            }
            <h1><b>EMAIL</b></h1>
            <input value={form.email} name="email" onChange={hdlOnChange} className='p-2 rounded w-64 border border-gray-300 shadow-md'></input>
            {
              formErrors.email && (
                <span className='text-red-600'>{formErrors.userName}</span>
              )
            }
            <h1><b>PASSWORD</b></h1>
            <input value={form.password} type="password" name="password" onChange={hdlOnChange} className='p-2 rounded w-64 border border-gray-300 shadow-md'></input>
            {
              formErrors.password && (
                <span className='text-red-600'>{formErrors.password}</span>
              )
            }
            <h1><b>CONFIRM PASSWORD</b></h1>
            <input value={form.confirmPassword} type="password" name="confirmPassword" onChange={hdlOnChange} className='p-2 rounded w-64 border border-gray-300 shadow-md'></input>
            {
              formErrors.confirmPassword && (
                <span className='text-red-600'>{formErrors.confirmPassword}</span>
              )
            }
            <button className='bg-blue-900 rounded-md
              hover:bg-blue-700 hover:scale-105 hover:duration-200
              font-bold text-white shadow-md p-1'>Register</button>
          </form>

        </div>
      </div>
    </div >
  )
}

export default Register
