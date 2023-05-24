import React, { useState } from "react";
import "./styles.scss";
import { Button, Form, Input } from "antd";
import logo from "../../../assets/images/imiu-register.svg";
import { Link } from "react-router-dom";
import des1 from "../../../assets/images/register-des-1.png";
import des2 from "../../../assets/images/register-des-2.png";
import des3 from "../../../assets/images/register-des-3.png";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="form-container">
          <h2>
            Hãy lên <span className="green">thực đơn</span> của bạn ngay hôm nay
            !
          </h2>
          <Form
            name="register-form"
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required.",
                },
                {
                  type: "email",
                  message: "Email is not valid.",
                },
              ]}
            >
              <Input placeholder="Email" className="custom-input" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is required.",
                },
              ]}
            >
              <Input.Password
                placeholder="Mật khẩu"
                type="password"
                className="custom-input"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                block
                type="primary"
                className="register-button"
                htmlType="submit"
                // loading={loading}
                size="large"
              >
                Đăng ký ngay
              </Button>
            </Form.Item>
          </Form>
          <p className="grey">
            Khi bấm đăng kí, bạn đồng ý nhận emails quảng cáo và chấp nhận Chính
            sách và Điều khoản. Có thể hủy đăng kí bất cứ lúc nào.
          </p>
          <div className="login-here">
            <h5>
              Đã có tài khoản ?{" "}
              <Link to="/login" className="green">
                Đăng nhập
              </Link>
            </h5>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="register-description-container">
        <div className="register-description">
          <div className="register-description__item">
            <div className="register-description__item__img">
              <img src={des1} alt="" loading="lazy"/>
            </div>
            <h5>Tiết kiệm thời gian</h5>
            <p>
              Chúng tôi sẽ mua và giao nguyên liệu đến trực tiếp nhà của bạn
            </p>
          </div>
          <div className="register-description__item">
            <div className="register-description__item__img">
              <img src={des2} alt="" loading="lazy"/>
            </div>
            <h5>Thiết kế thực đơn của bạn</h5>
            <p>
              Trao đổi các chất dinh dưỡng chính và phụ với hơn 30 công thức đa
              dạng hàng tuần
            </p>
          </div>
          <div className="register-description__item">
            <div className="register-description__item__img">
              <img src={des3} alt="" loading="lazy"/>
            </div>
            <h5>Tiết kiệm chi phí</h5>
            <p>
              Khẩu phần ăn hoàn hảo là không có thức ăn thừa và không phát sinh
              thêm chi phí
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
