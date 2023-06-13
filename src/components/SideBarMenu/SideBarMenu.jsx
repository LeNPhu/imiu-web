import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdRoomService } from "react-icons/md";
import { FaMoneyBill, FaBuilding, FaUserAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { IoNewspaperSharp } from "react-icons/io5";
import "./style.scss";
const routes = [
  {
    path: "/admin/",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/admin/user",
    name: "Contract",
    icon: <IoNewspaperSharp />,
  },
  {
    path: "/admin/bill",
    name: "Bill",
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
