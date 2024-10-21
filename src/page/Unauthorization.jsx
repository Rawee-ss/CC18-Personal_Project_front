import React from 'react'
import Unauthorized from "../image/Unauthorized.png"
import { Link } from 'react-router-dom'

const Unauthorization = () => {
  return (
    <div className='flex items-center justify-center bg-green-50 h-full w-full'>

      <div className='flex flex-col items-center rounded-md h-[50vh] w-[50vw]'>
     
          <img className=' h-auto w-auto ' src={Unauthorized} />
       <Link to={"/"} >
        <button className='flex justify-center items-center bg-green-100 p-4 h-10 w-32  rounded-md shadow font-bold text-green-900'>Go to Home</button>
       </Link>

      </div>

    </div>
  )
}

export default Unauthorization