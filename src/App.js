import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
    </Router>
  );
}

export default App;
