import { Navigate, Outlet } from "react-router-dom"
import Menu from "./common/Menu/Menu"
import Footer from "./common/Footer/Footer"


const App = () => {

  if (!localStorage.getItem("token")) return <Navigate to="/login" />

  return (
    <div className="app-container">
      <Menu />
        <Outlet />
      <Footer/>
    </div>
  )
}

export default App