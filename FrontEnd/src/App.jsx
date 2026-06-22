import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginDashboard from "./components/Dashboard/LoginDashboard/LoginDashboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from './components/Login/Login'
import Register from './components/Register/Register'
function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<LoginDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
