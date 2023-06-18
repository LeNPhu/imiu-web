import React from "react";
import { Outlet, useNavigate } from "react-router";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import { useDispatch } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import "./style.scss";
import logoImiu from "../../assets/images/logo-imiu.svg";
import { logout } from "../../store/authSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="main-container">
      <div className="side-bar">
        <div className="brand-container" onClick={handleNavigate}>
          <img src={logoImiu} />
        </div>
        <SideBarMenu />
        <div className="logout-container" onClick={handleLogout}>
          <div className="icon">
            <HiOutlineLogout />
          </div>
          Log out
        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
