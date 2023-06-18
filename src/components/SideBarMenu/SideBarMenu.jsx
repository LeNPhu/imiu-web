import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBill, FaUser } from "react-icons/fa";

import "./style.scss";
const routes = [
  {
    path: "/admin/",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/admin/user",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/admin/transaction",
    name: "Transactions",
    icon: <FaMoneyBill />,
  },
];
const SideBarMenu = () => {
  return (
    <div className="nav-bar">
      {routes.map((item, index) => {
        return (
          <NavLink key={index} to={item.path} className="nav-bar__item">
            <div className="nav-bar__item__icon">{item.icon}</div>
            <div className="nav-bar__item__name">{item.name}</div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBarMenu;
