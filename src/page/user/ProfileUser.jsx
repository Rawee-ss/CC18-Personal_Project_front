import React from 'react'

export default function ProfileUser() {
  // <h1>Profile</h1>
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [dob, setDob] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  // const handleSave = () => {
  //   // Add save logic here
  //   console.log({ username, email, password, confirmPassword });
  // };

  return (
    <div >
      <h1 className=' text-blue-900 text-3xl ml-20 mt-10'><b><u>My Profile</u></b></h1>
      <div className="flex flex-col justify-center items-center m-5">



        <div className="bg-white shadow-lg rounded-lg p-8 flex w-auto">

          {/* Form Fields */}
          <div className=" ml-8 flex flex-col justify-center items-center">
            <div className="mb-4">
              <h1 className="block text-blue-900 mb-2 font-bold">USERNAME</h1>
              <input
                type="text"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                className="w-72 border-2 border-blue-900 rounded-md p-2 outline-none"
              />
            </div>
            <div className="mb-4">
              <h1 className="block text-blue-900 mb-2 font-bold">EMAIL</h1>
              <input
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-72 border-2 border-blue-900 rounded-md p-2 outline-none"
              />
            </div>

            <div className="mb-4">
              <h1 className="block text-blue-900 mb-2 font-bold">PASSWORD</h1>
              <input
                type="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="w-72 border-2 border-blue-900 rounded-md p-2 outline-none"
              />
            </div>
            <div className="mb-4">
              <h1 className="block text-blue-900 mb-2 font-bold">CONFIRM PASSWORD</h1>
              <input
                type="password"
                // value={confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-72 border-2 border-blue-900 rounded-md p-2 outline-none"
              />
            </div>
            <button
              className="bg-blue-900 text-white px-6 py-2 mt-6 rounded-md hover:bg-blue-700"
            // onClick={handleSave}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
