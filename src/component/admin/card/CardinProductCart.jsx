import React from 'react'
import { Trash2 } from 'lucide-react';


const CardinProductCart = () => {
    return (
        <div className="flex flex-col  lg:flex-row justify-between p-8">
            {/* Cart Section */}
            <div className="w-full">

                <div className="flex h-36 items-center ml-10 p-4 rounded-lg mb-4 shadow-md bg-slate-50">
                    <input
                        type="checkbox"
                        className="mr-4" />
                    <img className="w-24 h-24 rounded-lg object-cover" />
                    <div className="ml-4 flex-1">
                        <h2 className="text-lg font-semibold text-blue-900">Name</h2>
                        <p className="text-gray-500">฿ 1222</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-600"><Trash2 /></button>
                </div>

            </div>

        </div>
    );
};






// <div className='flex justify-between ml-10 mt-10 border rounded-md  p-7 w-[40vw] h-[35vh] border-blue-500'>
//     <input type='checkbox' />
//     <div className='flex justify-center items-center bg-slate-300 w-60 h-45'>
//         image
//         {/* {
//             item.image
//                 ? <img src={item.image}
//                     className='rounded-md w-full h-24 object-cover  hover:duration-200' />
//                 : <div className='w-full h-24 bg-gray-200 rounded-md text-center flex items-center justify-center shadow'>
//                     No Image
//                 </div>
//         } */}

//     </div>

//     <div className='flex-col justify-between h-40'>

//         <div>
//             <p className='text-2xl font-bold text-blue-900'>
//                 {/* {item.name} */}
//                 name
//             </p>

//         </div>

//         <div className='flex-grow '>
//             <span className='text-xl font-bold text-blue-900'>฿ price
//                 {/* {item.price} */}
//             </span>
//             <span className='p-2 text-s  text-blue-900'>Delete</span>
//         </div>

//     </div>
// </div>


//     )
// }

export default CardinProductCart
