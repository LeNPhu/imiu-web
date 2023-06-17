import "./style.scss";
import React from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { AiFillCreditCard } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import settingLogo from "../../assets/images/setting-logo.svg";
const SettingNavbar = () => {
  const Routes = [
    {
      path: "/",
      name: "Tổng quan về tài khoản",
      icon: <BsHouseDoorFill />,
    },

    {
      path: "/security",
      name: "Thay đổi mật khẩu",
      icon: <AiFillLock />,
    },
    {
      path: "/payment-info",
      name: "Thẻ thanh toán đã lưu",
      icon: <AiFillCreditCard />,
    },
    {
      path: "/favourite",
      name: "Món ăn yêu thích",
      icon: <AiFillHeart />,
    },
    {
      path: "/history",
      name: "Món ăn đã áp dụng",
      icon: <AiFillStar />,
    },
  ];
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    setActive(e.target.key);
  };

  return (
    <div className="navbar-container">
      <img className="logo" src={settingLogo} />
      {Routes.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={`/setting${item.path}`}
            // what the fuck
            className={"navbar-item "}
            onClick={handleClick}
          >
            <div className="item-icon">{item.icon}</div>
            <div className="item-name">{item.name}</div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SettingNavbar;
