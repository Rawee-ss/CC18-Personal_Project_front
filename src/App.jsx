import { Router } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import AppRoute from "./route/AppRoute"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (

    <AuthProvider>
      <ToastContainer />
      <AppRoute />
    </AuthProvider>

  )
}

export default App
