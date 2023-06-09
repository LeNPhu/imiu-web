import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const AdminRoutes = () => {
  const navigate = useNavigate();
  const { role, isVerified } = useSelector((state) => state.auth);

  useEffect(() => {
    if (role !== "ADMIN" || !isVerified) {
      navigate("/")
    }
  }, [role, isVerified, navigate]);

  return role === "ADMIN" ? (
    <Outlet />
  ) : null;
};

export default AdminRoutes;
