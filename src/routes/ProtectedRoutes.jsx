import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { role, isVerified } = useSelector((state) => state.auth);
  return role === "CUSTOMER" && isVerified ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
