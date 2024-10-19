import React, { useEffect, useState } from 'react'
import { createCategory, getAllCategory, deleteCategory } from '../../api/CategoryApi'
import { AuthProvider, useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import { getAccessToken } from '../../untils/LocalStorage'

export const FromCategory = () => {
    // const token = AuthProvider((state) => state.token)
    // const { token } = useAuth()
    const token = getAccessToken();
    const [name, setName] = useState("")
    const [categories, setCategories] = useState([])

    useEffect(() => {

        getCategory(token);

    }, [token])


    const getCategory = async (token) => {
        try {
            const res = await getAllCategory(token)
            setCategories(res.data)
        } catch (err) {
            console.log(err)
        }
    }


    const hdlOnSubmit = async (e) => {
        e.preventDefault()
        console.log({ name })
        if (!name) {
            return toast.warning("plese fill data")
        }
        try {
            const res = await createCategory(token, { name })
            console.log(res.data.name)
            toast.success(`add ${res.data.name} success`)
            getCategory(token)
        } catch (err) {
            console.log(err)
        }
    }

    const hdlDelete = async (id) => {
        console.log(id, token)
        try {
            const res = await deleteCategory(token, id)
            console.log(res)
            getCategory(token)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='container mx-auto p-4 bg-white shadow-md'>
            <h1 className=' text-blue-900 text-3xl ml-20'><b><u>Category</u></b></h1>
            <form className=' m-10 flex justify-center items-center ' onSubmit={hdlOnSubmit}>
                <input onChange={(e) => setName(e.target.value)} className='border w-[50vw] h-[5vh]' type='text' />
                <button className='bg-blue-900 h-10 w-20  rounded-sm text-white ml-2'>Add</button>


            </form>
            <ul>
                {categories.map((item, index) => (
                    <li
                        className='flex justify-between'
                        key={index.id}>
                        <span>
                            {item.name}
                        </span>
                        <button onClick={() => hdlDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
