import { Router } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import AppRoute from "./route/AppRoute"


function App() {

  return (

      <AuthProvider>
        <AppRoute />
      </AuthProvider>

  )
}

export default App
