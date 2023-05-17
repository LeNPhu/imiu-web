import { Dropdown } from "antd";
import "./style.scss";
import React from "react";
import { useMediaQuery } from "react-responsive";
const Footer = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 1224px)" });
  console.log(isTablet);
  if (isTablet)
    return (
      <footer className="footer-container">
        <div className="info-container">
          <div className="info-column">
            <span className="info-title">iMiu</span>
            <a>Chúng tôi</a>
            <a>Blog</a>
            <a>Công thức</a>
            <a>Mã giảm giá</a>
            <a>Đầu bếp</a>
            <a>Việt Nam food</a>
            <a>Hình thức giao hàng</a>
          </div>
          <div className="info-column">
            <span className="info-title">Công ty chúng tôi</span>
            <a>iMiu group</a>
            <a>Liên hệ</a>
          </div>
          <div className="info-column">
            <span className="info-title">Đối tác của chúng tôi</span>
            <a>Đối tác</a>
            <a>Liên hệ để hợp tác</a>
          </div>
          <div className="info-column">
            <span className="info-title">Liên hệ</span>
            <a>Câu hỏi</a>
            <a>Liên hệ đối tác</a>
          </div>
          <div className="info-column last">
            <a>Tải ngay ứng dụng của chúng tôi</a>
            <span>Kiểm soát bữa ăn của bạn mọi lúc, mọi nơi</span>
          </div>
        </div>
        <div className="copyright-container">
          <span>© iMiu 2023</span>
          <a>Terms and Conditions</a>
          <a>Privacy</a>
          <a>Accessibility</a>
        </div>
      </footer>
    );
  else
    return (
      <footer className="footer-container">
        <p>nhin cc antd sap r</p>
      </footer>
    );
};

export default Footer;
