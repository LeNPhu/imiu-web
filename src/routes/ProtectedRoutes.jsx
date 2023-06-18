import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { role, isVerified } = useSelector((state) => state.auth);
  // return role === "CUSTOMER" && isVerified ? <Navigate to="/" /> : <Outlet />;
  if (isVerified) {
    return role === "CUSTOMER" ? <Navigate to="/" /> : <Navigate to="/admin" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
