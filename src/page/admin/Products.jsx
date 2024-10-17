import { FaCartPlus } from 'react-icons/fa';
import { MdCreate } from "react-icons/md";
import { Link } from 'react-router-dom';


const ProductItem = () => {
  return (
    <div className='container mx-auto p-4 bg-white shadow-md my-5'>
      <div className=' text-blue-900 text-3xl ml-20'><b><u>Products</u></b></div>
      <div className='flex justify-center items-center ' >
        {/* <div className='flex justify-end'>
      </div> */}
        <label className="input input-bordered flex items-center gap-2 my-5 w-[50vw]">
          <input type="search" className="grow flex justify-center" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        {/* <button className='flex justify-center items-center m-5 btn btn-accent h-10 w-20 rounded-lg shadow-xl text-gray-100'> <MdCreate/><b> Add</b></button> */}
        {/* <button className="flex justify-center items-center rounded-md bg-green-600  h-10 m-5 w-20 text-white"><Link to={"/admin/createProduct"}><MdCreate/><b> Add</b></Link></button> */}
        <button className='flex justify-center items-center'><Link to={"/admin/createProduct"}><MdCreate/><b> Add</b></Link></button>
      </div>
      <div className='flex justify-center'>

        <div className="card card-side bg-base-100 shadow-xl h-[35vh] w-[50vw]">
          {/* <figure> */}
            <img
            className=' ml-20 m-5 flex justify-start '
              src="https://static.wixstatic.com/media/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg/v1/fill/w_1225,h_1699,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/9965a8_da553365fd174ed89f441ecc6299fc09~mv2.jpg"
               />
          {/* </figure> */}
          <div className="card-body">
            <h2 className="card-title">Coral Island</h2>
            {/* <p>Click the button to watch on Jetflix app.</p> */}
            <div className="card-actionsitems-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition">
    //   {/* <img src={product.image} alt={product.name} className="w-full h-40 object-cover" /> */}
    //   <h2 className="text-lg font-semibold mt-2">name</h2>
    //   <p className="text-gray-600">detail</p>
    //   <span className="block text-green-500 font-bold mt-2">฿price</span>
    //   <button className="bg-green-500 text-white px-4 py-2 rounded mt-2 flex items-center hover:bg-green-600">
    //     <FaCartPlus className="mr-2" /> Add 
    //   </button>
    // </div>
  );
};

export default ProductItem;
