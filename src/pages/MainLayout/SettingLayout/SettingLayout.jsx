import { Outlet } from "react-router";
import "./styles.scss";
import React from "react";

import SettingNavbar from "../../../components/SettingNavbar/SettingNavbar";

const SettingLayout = () => {
  return (
    <div className="setting-container">
      <SettingNavbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingLayout;
