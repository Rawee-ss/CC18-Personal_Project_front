import React from 'react'
import { Link } from 'react-router-dom'

const FromStore = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="container w-[70vw] flex flex-col justify-center items-center p-6 bg-slate-50 shadow-lg rounded-lg">

        <img
          alt="image"
          className="w-[45vw] h-[40vh] rounded-md my-4 bg-slate-200 "
        />

        <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">
          Harry Potter: Magic Awakened
        </h2>

        <div className="flex justify-center">
          <Link to={"/user/store"}>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Install
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FromStore
