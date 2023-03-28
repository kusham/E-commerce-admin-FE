import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />

    </Router>
  );
}

export default App;
