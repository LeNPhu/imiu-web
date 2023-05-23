import React from "react";
import pricingBanner from "../../../assets/images/pricing-banner.svg";
import pricingNoodle from "../../../assets/images/pricing-noodle.svg";
import { FcCheckmark } from "react-icons/fc";
import "./style.scss";
import { Button, Col, Row } from "antd";
const Pricing = () => {
  return (
    <div className="pricing-container">
      <img className="banner" src={pricingBanner} />
      <div className="content">
        <div className="card">
          <p className="card-title">Free</p>
          <p className="card-price">$0</p>
          <p className="card-info">cho người dùng free</p>
          <p>
            <FcCheckmark /> Số lượng công thức: 10 món
          </p>
          <p>
            <FcCheckmark /> Giá trị dinh dưỡng chi tiết của nguyên liệu trong
            thực đơn
          </p>
          <p>
            <FcCheckmark /> ball ball ball ball
          </p>
          <Button block>Đăng kí thực đơn ngay bây giờ</Button>
        </div>

        <div className="card">
          <p className="card-title"> Not Free</p>
          <p className="card-price">$100</p>
          <p className="card-info">cho người dùng trả tiền</p>
          <p>
            <FcCheckmark /> Số lượng công thức: 10 món
          </p>
          <p>
            <FcCheckmark /> Giá trị dinh dưỡng chi tiết của nguyên liệu trong
            thực đơn
          </p>
          <p>
            <FcCheckmark /> Giá trị dinh dưỡng chi tiết của nguyên liệu trong
            thực đơn
          </p>
          <p>
            <FcCheckmark /> ball ball ball ball
          </p>
          <Button block type="primary">
            Bắt đầu dùng thử miễn phí
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
