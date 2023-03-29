import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route index element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
