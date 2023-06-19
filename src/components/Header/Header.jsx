import { Button, Dropdown, Modal, Space } from "antd";
import "./style.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAvatar from "../../assets/images/user-avatar.svg";
import imiuLogo from "../../assets/images/logo-imiu.svg";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import { logout } from "../../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { role, isVerified } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const items = [
    {
      label: <Link to="/setting">Cài đặt tài khoản</Link>,
      key: "0",
    },
    {
      label: <div onClick={showModal}>Đăng xuất</div>,
      key: "1",
    },
  ];
  return (
    <header className={`header-container ${cls}`}>
      <Link to="/">
        <img className="header-item" src={imiuLogo} />
      </Link>
      <Link to="/" className="header-item">
        Trang chủ
      </Link>
      <Link to="/pricing" className="header-item">
        Các gói dịch vụ
      </Link>
      <Link to="/how-to-use" className="header-item">
        Hướng dẫn sử dụng
      </Link>
      <Link to="/menu" className="header-item">
        Menu
      </Link>
      <div className="header-item last">
        {role === "CUSTOMER" && isVerified ? (
          <>
            <img className="user-avatar" src={userAvatar} />
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <DownOutlined />
              </a>
            </Dropdown>
          </>
        ) : (
          <>
            <Link to="/register">
              <Button type="primary">
                <b>Bắt đầu</b>
              </Button>
            </Link>
            <Link to="/login">
              <Button>Đăng nhập</Button>
            </Link>
          </>
        )}
      </div>
      <Modal
        title="Đăng xuất"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có chắc chắc muốn đăng xuất khỏi Imiu không?</p>
      </Modal>
    </header>
  );
};

export default Header;
