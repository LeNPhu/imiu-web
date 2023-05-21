import { Button } from "antd";
import "./style.scss";
import { useEffect, useState } from "react";

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
        <Button type="primary">Lên thực đơn ngay</Button>
        <Button>Đăng nhập</Button>
      </div>
    </header>
  );
};

export default Header;
