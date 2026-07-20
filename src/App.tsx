import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Landing/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employee360 from "./pages/Employee360/Employee360";
import AIHiring from "./pages/AIHiring/AIHiring";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
<Route path="/employee-360" element={<Employee360 />} />
<Route path="/ai-hiring" element={<AIHiring />} />
      </Routes>
    </BrowserRouter>
  );
}
