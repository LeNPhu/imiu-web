import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      AdminLayout
      <Outlet />
    </div>
  );
};

export default AdminLayout;
