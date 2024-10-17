import React, { useEffect, useState } from 'react'
import { createCategory, getAllCategory, deleteCategory } from '../../api/CategoryApi'
import { AuthProvider } from '../../context/AuthContext'
import { toast } from 'react-toastify'

export const FromCategory = () => {
    const token = AuthProvider((state) => state.token)
    const [name, setName] = useState("")
    const [categories, setCategories] = useState([])

    useEffect(() => {

        getCategory(token);

    }, [])


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
        console.log(id)
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
            <h1>Category Management</h1>
            <form className='my-4' onSubmit={hdlOnSubmit}>
                <input onChange={(e) => setName(e.target.value)} className='border' type='text' />
                <button className='bg-blue-900 text-white ml-20'>Add</button>


            </form>
            <ul>
                {categories.map((item) => (
                    <li
                        className='flex justify-between'
                        key={item.id}>
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
