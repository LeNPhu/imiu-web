import React, { useState } from "react";
import "./style.scss";
import { Steps } from "antd";
import step1 from "../../../assets/images/howtouse-step1.png";
import step2 from "../../../assets/images/howtouse-step2.png";
import step3 from "../../../assets/images/howtouse-step3.png";
const HowToUse = () => {
  const images = [step1, step2, step3];
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    setCurrent(value);
    console.log(value);
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
        <div className="illustration">
          <img src={images[current]} />
        </div>

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
