import "./style.scss";
import { Button, ConfigProvider, Drawer, Menu, Modal } from "antd";
import React from "react";
import { useState } from "react";
import { SettingFilled } from "@ant-design/icons";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import {
  FaUserEdit,
  FaSignInAlt,
  FaStar,
  FaQuestion,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
const HeaderDrawer = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { role, isVerified } = useSelector((state) => state.auth);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(logout());
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const guest = [
    {
      label: <Link to="/login">Đăng nhập</Link>,
      key: "login",
      icon: <FaSignInAlt />,
    },
    {
      label: <Link to="/register">Đăng kí</Link>,
      key: "signin",
      icon: <FaUserEdit />,
    },
  ];
  const user = [
    {
      label: <Link to="/setting">Thiết lập tài khoản</Link>,
      key: "setting",
      icon: <SettingFilled />,
    },
    {
      label: (
        <Link to="#" onClick={showModal}>
          Đăng xuất
        </Link>
      ),
      key: "logout",
      icon: <FaSignOutAlt />,
    },
  ];
  const init = [
    {
      label: <Link to="/pricing">Các gói dịch vụ</Link>,
      key: "pricing",
      icon: <FaStar />,
    },
    {
      label: <Link to="/menu">Menu</Link>,
      key: "menu",
      icon: <MdOutlineRestaurantMenu />,
    },
    {
      label: <Link to="/how-to-use">Hướng dẫn sử dụng</Link>,
      key: "question",
      icon: <FaQuestion />,
    },
  ];
  return (
    <>
      <Button type="text" onClick={showDrawer}>
        <HiMenuAlt2 className="header-drawer-btn" />
      </Button>

      <Drawer placement="left" closable={false} onClose={onClose} open={open}>
        <Menu
          style={{ borderInlineEnd: "none" }}
          items={
            (role === "CUSTOMER" && isVerified) ||
            (role === "ADMIN" && isVerified)
              ? init.concat(user)
              : init.concat(guest)
          }
          onClick={onClose}
        />
      </Drawer>
      <Modal
        title="Đăng xuất"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có chắc chắc muốn đăng xuất khỏi Imiu không?</p>
      </Modal>
    </>
  );
};

export default HeaderDrawer;
