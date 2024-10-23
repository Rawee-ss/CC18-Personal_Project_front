import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

export default function ProfileAdmin() {

    const { updateProfile, dataUser, fetchUserData } = useAuth()
  
    console.log('dataUser', dataUser)
  
    const [userName, setUsername] = useState(dataUser?.userName || '');
    const [email, setEmail] = useState(dataUser?.email || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSave = async (e) => {
      e.preventDefault()
      console.log({ userName, email, password, confirmPassword });
  
      const data = {
        userName,
        email,
      }
  
      if(password && confirmPassword) {
        data.password = password
        data.confirmPassword = confirmPassword
      }
  
      // validate data here if needed
  
      try {
        await updateProfile(data);
        toast.success("Update Profile Success");
      } catch (err) {
        toast.error("Failed to update profile");
      }
    };
  
    const fetchdata = async () => {
      await fetchUserData();
      setUsername(dataUser?.userName || '');
      setEmail(dataUser?.email || '');
    }
  
    useEffect(() => {
      fetchdata();
    }, []);
  
    console.log('userName', dataUser?.userName);
    console.log('email', dataUser?.email);
  
    return (
      <div >
        <h1 className=' text-blue-900 text-3xl ml-20 mt-10'><b><u>My Profile</u></b></h1>
        <div className="flex flex-col justify-center items-center m-5">
  
          <div className="bg-white shadow-lg rounded-lg p-8 flex w-auto">
  
            {/* Form Fields */}
            <form onSubmit={handleSave}>
            <div className=" ml-8 flex flex-col justify-center items-center">
              <div className="mb-4">
                <h1 className="block text-blue-900 mb-2 font-bold">USERNAME</h1>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-72 border-2 border-blue-900 rounded-md p-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <h1 className="block text-blue-900 mb-2 font-bold">EMAIL</h1>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-72 border-2 border-blue-900 rounded-md p-2 outline-none"
                />
              </div>
  
              <div className="mb-4">
                <h1 className="block text-blue-900 mb-2 font-bold">PASSWORD</h1>
                <input
                  type="password"
                  value={password}  // Add value here
                  onChange={(e) => setPassword(e.target.value)}  // Add onChange event
                  className="w-72 border-2 border-blue-900 rounded-md p-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <h1 className="block text-blue-900 mb-2 font-bold">CONFIRM PASSWORD</h1>
                <input
                  type="password"
                  value={confirmPassword}  // Add value here
                  onChange={(e) => setConfirmPassword(e.target.value)}  // Add onChange event
                  className="w-72 border-2 border-blue-900 rounded-md p-2 outline-none"
                />
              </div>
              <button
                className="bg-blue-900 text-white px-6 py-2 mt-6 rounded-md hover:bg-blue-700"
                // onClick={handleSave}  // Add the save function here
              >
                SAVE
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  