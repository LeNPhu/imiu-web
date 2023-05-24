import Home from "../pages/MainLayout/Home/Home";
import Login from "../pages/MainLayout/Login/Login";
import Register from "../pages/MainLayout/Register/Register";
import Pricing from "../pages/MainLayout/Pricing/Pricing";
import AdminDashboard from "../pages/AdminLayout/AdminDashboard/AdminDashboard"
import User from "../pages/AdminLayout/User/User";
import HowToUse from "../pages/MainLayout/HowToUse/HowToUse";

export const publicRouters = [
  { path: "", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/how-to-use", element: <HowToUse /> },
  
];

export const adminRouters = [
  { path: "/admin", element: <AdminDashboard /> },
  { path: "/user", element: <User /> },
];
