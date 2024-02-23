import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Armario from "./pages/Armario/Armario";
import Novatos from "./pages/Novatos/Novatos";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<><Navbar/><Login/></>} />
        <Route path="/register" element={<><Navbar/></>}/>
        <Route path="/dashboard" element={<><Navbar/><Dashboard/></>} />
        <Route path="/armario" element={<><Navbar/><Armario/></>}/>
        <Route path="/" />
        <Route path="/novatos" element={<><Navbar/><Novatos/></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;