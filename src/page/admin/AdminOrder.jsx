import React from 'react'

export default function AdminOrder() {
  return (
    <div className='container mx-auto p-4 bg-white shadow-md my-5'>
      <h1 className=' text-blue-900 text-3xl ml-20'><b><u>Order</u></b></h1>
      <div className='flex justify-center items-center'>

        <label className="input input-bordered flex items-center gap-2 my-5 w-[50vw]">
          <input type="text" className="grow flex justify-center" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-md ml-2 w-50 h-12 hover:bg-blue-700">
          Search
        </button>
      </div>
      <div>

      </div>
    </div>
  )
}
