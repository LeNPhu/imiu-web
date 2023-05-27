import React, { useState } from "react";
import "./style.scss";
import { Steps } from "antd";
const HowToUse = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const items = [
    {
      title: "Đăng ký",
      description: "Đăng kí tài khoản I.Miu để sử dụng các dịch vụ",
    },
    {
      title: "Chọn gói",
      description: "Chọn gói dịch vụ phù hợp với nhu cầu và tài chính của bạn",
    },
    {
      title: "Chọn món",
      description: "Chọn món ăn bạn muốn từ vô số lựa chọn của I.Miu",
    },
  ];
  return (
    <div className="howto-container">
      <div className="raleway title">
        Hướng dẫn đăng ký sử dụng <span className="green">I.Miu</span>
      </div>
      <div className="content">
        <div className="illustration"></div>

        <Steps
          direction="vertical"
          items={items}
          current={current}
          onChange={onChange}
        ></Steps>
      </div>
    </div>
  );
};

export default HowToUse;
