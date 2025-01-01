import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/user-management/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Register from "./components/user-management/register/register";

function App() {
  return (
    <Router>       
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={ <Register/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
