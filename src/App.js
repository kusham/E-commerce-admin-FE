import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import ViewOrder from "./pages/ViewOrder";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route index element={<Dashboard />} />

        <Route path="customers" element={<Customers />} />

        <Route path="orders" element={<Orders />} />
        <Route path="order/:id" element={<ViewOrder />} />



      </Routes>
    </Router>
  );
}

export default App;
