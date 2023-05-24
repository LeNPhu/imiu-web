import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


//check admin users
const PrivateRoutes = () => {
  // const {userToken} = useSelector((state) => state.user);
  const isAdmin = false;
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
