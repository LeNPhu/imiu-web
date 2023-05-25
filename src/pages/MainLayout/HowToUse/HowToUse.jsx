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
      description:
        "đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký ",
    },
    {
      title: "Chọn gói",
      description:
        "đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký",
    },
    {
      title: "Chọn món",
      description:
        "đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký đăng ký",
    },
  ];
  return (
    <div className="howto-container">
      <div className="illustration"></div>

      <Steps
        direction="vertical"
        items={items}
        current={current}
        onChange={onChange}
      ></Steps>
    </div>
  );
};

export default HowToUse;
