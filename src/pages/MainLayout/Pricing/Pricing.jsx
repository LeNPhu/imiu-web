import React, { useState } from "react";
import pricingBanner from "../../../assets/images/pricing-banner.svg";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import "./style.scss";
import { Button } from "antd";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

const Pricing = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(
    Cookies.get("account") ? JSON.parse(Cookies.get("account")) : null
  );

  console.log("account type", account);
  const checkUser = (type) => {
    console.log(type);
    if (account?.isLogin && type == "free") {
      navigate("/menu");
    } else if (account?.isLogin && type == "premium") {
      navigate("/question");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="pricing-container">
      <img className="banner" src={pricingBanner} />
      <div className="content">
        <div className="card">
          <p className="card-title">Free</p>
          <p className="card-price">Free</p>
          <p className="card-info">dịch vụ miễn phí</p>
          <p>
            <FcCheckmark /> 10 món.
          </p>
          <p>
            <FcCheckmark /> Giá trị dinh dưỡng chi tiết của nguyên liệu trong
            thực đơn.
          </p>
          <p>
            <FcCheckmark /> Cách chế biến món ăn.
          </p>
          <p className="grey">
            <FcCancel /> Cá nhân hóa thực đơn theo tình trạng sức khỏe.
          </p>
          <p className="grey">
            <FcCancel /> Cho phép lưu lại các món ăn yêu thích.
          </p>
          <Button onClick={() => checkUser("free")} block type="primary">
            <b>Bắt đầu</b>
          </Button>
        </div>
        <div className="card">
          <p className="card-title">Classic</p>
          <p className="card-price">69.000 ₫ <span className="duration">/ mỗi tháng</span></p>
          <p className="card-info">cho người dùng trả tiền</p>
          <b className="green">
            <FcCheckmark /> 50 món mỗi tháng.
          </b>
          <p>
            <FcCheckmark /> Giá trị dinh dưỡng chi tiết của nguyên liệu trong
            thực đơn.
          </p>
          <p>
            <FcCheckmark /> Cách chế biến món ăn.
          </p>
          <p>
            <FcCheckmark /> Cá nhân hóa thực đơn theo tình trạng sức khỏe.
          </p>
          <p>
            <FcCheckmark /> Cho phép lưu lại các món ăn yêu thích.
          </p>
          <Button onClick={() => checkUser("free")} block type="primary">
            <b>Bắt đầu</b>
          </Button>
        </div>
        <div className="card">
          <p className="card-title">Premium 🎉</p>
          <p className="card-price">250.000 ₫ <span className="duration green">/ vĩnh viễn</span></p>
          <p className="card-info">cho người dùng trả tiền</p>
          <b className="green">
            <FcCheckmark /> Không giới hạn món ăn.
          </b>
          <p>
            <FcCheckmark /> Giá trị dinh dưỡng chi tiết của nguyên liệu trong
            thực đơn.
          </p>
          <p>
            <FcCheckmark /> Cách chế biến món ăn.
          </p>
          <p>
          <FcCheckmark /> Cá nhân hóa thực đơn theo tình trạng sức khỏe.
          </p>
          <p>
            <FcCheckmark /> Cho phép lưu lại các món ăn yêu thích.
          </p>
          {account?.accountType === "premium" ? (
            <Button disabled>
              <b>Current Plan</b>
            </Button>
          ) : (
            <Button onClick={() => checkUser("premium")} block type="primary">
              <b>Bắt đầu</b>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
