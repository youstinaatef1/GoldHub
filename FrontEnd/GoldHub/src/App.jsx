import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
function App() {
  return (
  
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
    
  )
}

export default App
