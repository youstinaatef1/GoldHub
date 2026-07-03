import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Dashboard/Footer/Footer";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHome from "./DashboardHome";
import Users from "./User";
import ShopDashboard from "../../components/ui/ShopDashboard/ShopDashboard";
import ProductDashboard from "../../components/ui/ProductDashboard/ProductDashboard";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";
import ShopForm from "../../components/ui/ShopForm/ShopForm";
import ProductForm from "../../components/ui/ProductForm/ProductForm";
const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Navbar adminName="Super Admin" />

      <div className="d-flex flex-grow-1">
        <Sidebar />

        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="home" element={<DashboardHome />} />
            <Route path="shops" element={<ShopDashboard />} />
            <Route path="shops/add" element={<ShopForm />} />
            <Route path="products" element={<ProductDashboard />} />
            <Route path="products/add" element={<ProductForm />} />
            <Route path="users" element={<Users />}>
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>
              

            {/* <Route path="projects" element={<Projects />} /> */}
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
