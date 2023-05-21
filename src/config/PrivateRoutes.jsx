import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const PrivateRoutes = () => {
  // const {userToken} = useSelector((state) => state.user);
  const [userToken, setState] = useState("admin");
  
  return userToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
