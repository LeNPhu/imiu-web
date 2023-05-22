import React, { useState } from "react";
import "./styles.scss";
import { Button, Form, Input } from "antd";
import logo from "../../../assets/images/imiu-register.svg";
import { Link } from "react-router-dom";
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
            <h5>Đã có tài khoản ? <Link to="/login" className="green">Đăng nhập</Link></h5>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="register-wrapper">helo</div>
    </div>
  );
};

export default Register;
