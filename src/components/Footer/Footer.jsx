import { Divider, Dropdown, Menu } from "antd";
import "./style.scss";
import React from "react";
import { useMediaQuery } from "react-responsive";

import { SocialIcon } from "react-social-icons";
const Footer = () => {
  const imiu = [
    {
      name: "Chúng tôi",
      url: "#",
    },
    {
      name: "Blog",
      url: "#",
    },
    {
      name: "Công thức",
      url: "#",
    },
    {
      name: "Mã giảm giá",
      url: "#",
    },
    {
      name: "Đầu bếp",
      url: "#",
    },
    {
      name: "Việt Nam food",
      url: "",
    },
    {
      name: "Đầu bếp",
      url: "#",
    },
    {
      name: "Hình thức giao hàng",
      url: "#",
    },
  ];
  const company = [
    {
      name: "iMiu group",
      url: "#",
    },
    {
      name: "Liên hệ",
      url: "#",
    },
  ];
  const collaborator = [
    {
      name: "Đối tác",
      url: "#",
    },
    {
      name: "Liên hệ để hợp tác",
      url: "#",
    },
  ];
  const contact = [
    {
      name: "Câu hỏi",
      url: "#",
    },
    {
      name: "Liên hệ đối tác",
      url: "#",
    },
  ];

  const isTablet = useMediaQuery({ query: "(min-width: 1024px)" });
  //console.log(isTablet);
  if (isTablet)
    return (
      <footer className="footer-container">
        <div className="info-container">
          <div className="info-column">
            <span className="info-title">iMiu</span>
            {imiu.map((link, index) => {
              return (
                <a href={link.url} key={index}>
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="info-column">
            <span className="info-title">Công ty chúng tôi</span>
            {company.map((link, index) => {
              return (
                <a key={index} href={link.url}>
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="info-column">
            <span className="info-title">Đối tác của chúng tôi</span>
            {collaborator.map((link, index) => {
              return (
                <a key={index} href={link.url}>
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="info-column">
            <span className="info-title">Liên hệ</span>
            {contact.map((link, index) => {
              return (
                <a key={index} href={link.url}>
                  {link.name}
                </a>
              );
            })}
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
          <div className="icon-container">
            <SocialIcon className="icon" url="https://twitter.com" />
            <SocialIcon className="icon" url="https://www.facebook.com/" />
          </div>
        </div>
      </footer>
    );
  else
    return (
      <footer className="footer-container tablet">
        <Menu className="menu" mode="inline">
          <Menu.SubMenu title="iMiu">
            {imiu.map((items, index) => {
              return (
                <Menu.Ite key={index}>
                  <a href={items.url}>{items.name}</a>
                </Menu.Ite>
              );
            })}
          </Menu.SubMenu>
          <Divider className="divider" />
          <Menu.SubMenu title="Công ty chúng tôi">
            {company.map((items, index) => {
              return (
                <Menu.Item key={index}>
                  <a href={items.url}>{items.name}</a>
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
          <Divider className="divider" />

          <Menu.SubMenu title="Đối tác chúng tôi">
            {collaborator.map((items, index) => {
              return (
                <Menu.Item key={index}>
                  <a href={items.url}>{items.name}</a>
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
          <Divider className="divider" />

          <Menu.SubMenu title="Liên lạc">
            {contact.map((items, index) => {
              return (
                <Menu.Item>
                  <a key={index} href={items.url}>
                    {items.name}
                  </a>
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
          <Divider className="divider" />
        </Menu>
        <div className="tablet-download">
          <a>Tải ngay ứng dụng của chúng tôi</a>
          <br />
          <span>Kiểm soát bữa ăn của bạn mọi lúc, mọi nơi</span>
        </div>
        <div className="tablet-copyright">
          <div className="tablet-icon">
            <SocialIcon className="icon" url="https://twitter.com" />
            <SocialIcon className="icon" url="https://www.facebook.com/" />
          </div>
          <div className="copyright-info">
            <a>Terms and Conditions</a>
            <a>Privacy</a>
            <a>Accessibility</a>
          </div>
          <span>© iMiu 2023</span>
        </div>
      </footer>
    );
};

export default Footer;
