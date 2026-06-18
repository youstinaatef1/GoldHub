import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return ( 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      
        
      </Routes>  
  )
}

export default App
