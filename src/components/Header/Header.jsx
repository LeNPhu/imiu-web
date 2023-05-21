import { Button, ConfigProvider } from "antd";
import "./style.scss";
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";

const Header = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";

  return (
    <header className={`header-container ${cls}`}>
      <img className="header-item" src="./src/assets/images/logo-imiu.svg" />
      <a className="header-item">Trang chủ</a>
      <a className="header-item">Các gói dịch vụ</a>
      <a className="header-item">Hướng dẫn sử dụng</a>
      <div className="header-item last">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: " #0CBF1E",
            },
          }}
        >
          <Button type="primary">Lên thực đơn ngay</Button>
          <Button>Đăng nhập</Button>
        </ConfigProvider>
      </div>
    </header>
  );
};

export default Header;
