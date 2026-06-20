import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Dashboard/Products'
// import  ShopDashboard  from './component/Dashboard/ShopDashboard/ShopDashboard'
function App() {
  return ( 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path='/product' element ={<Products />} />
      {/* <Route path='/shopDash' element = {<ShopDashboard />} /> */}
        
      </Routes>  
  )
}

export default App
