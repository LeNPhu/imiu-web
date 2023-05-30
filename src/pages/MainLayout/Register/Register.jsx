import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Button, Form, Input, Modal } from "antd";
import logo from "../../../assets/images/imiu-register.svg";
import { Link, useNavigate } from "react-router-dom";
import des1 from "../../../assets/images/register-des-1.png";
import des2 from "../../../assets/images/register-des-2.png";
import des3 from "../../../assets/images/register-des-3.png";
import { useRegisterMutation } from "../../../store/services/authApi";

const Register = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [register, { isLoading, isSuccess }] = useRegisterMutation();
  const [onOpen, setOnOpen] = useState(isSuccess);
  const onFinish = (values) => {
    console.log("values", values);
    register(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("error", errorInfo);
  };
  return (
    <>
      <div className="register-container">
        <div className="register-wrapper">
          <div className="form-container">
            <h2>
              Hãy lên <span className="green">thực đơn</span> của bạn ngay hôm
              nay !
            </h2>
            <Form
              name="register-form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email.",
                  },
                  {
                    type: "email",
                    message: "Email không đúng định dạng.",
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
                    message: "Vui lòng nhập mật khẩu.",
                  },
                  {
                    pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      "Mật khẩu phải có ít 8 kí tự kết hợp từ chữ và số.",
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
                  loading={isLoading}
                  size="large"
                >
                  Đăng ký ngay
                </Button>
              </Form.Item>
            </Form>
            <p className="grey">
              Khi bấm đăng kí, bạn đồng ý nhận emails quảng cáo và chấp nhận
              Chính sách và Điều khoản. Có thể hủy đăng kí bất cứ lúc nào.
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
                <img src={des1} alt="" loading="lazy" />
              </div>
              <h5>Tiết kiệm thời gian</h5>
              <p>
                Chúng tôi sẽ mua và giao nguyên liệu đến trực tiếp nhà của bạn
              </p>
            </div>
            <div className="register-description__item">
              <div className="register-description__item__img">
                <img src={des2} alt="" loading="lazy" />
              </div>
              <h5>Thiết kế thực đơn của bạn</h5>
              <p>
                Trao đổi các chất dinh dưỡng chính và phụ với hơn 30 công thức
                đa dạng hàng tuần
              </p>
            </div>
            <div className="register-description__item">
              <div className="register-description__item__img">
                <img src={des3} alt="" loading="lazy" />
              </div>
              <h5>Tiết kiệm chi phí</h5>
              <p>
                Khẩu phần ăn hoàn hảo là không có thức ăn thừa và không phát
                sinh thêm chi phí
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal open={isSuccess} centered="true" okText="Tiếp tục" onOk={() => navigate("/login")} cancelButtonProps={{ style: { display: 'none' } }}>
        <div className="modal-confirmation">
          <img src={logo} alt="" loading="lazy" />
          <h2>XÁC NHẬN TÀI KHOẢN</h2>
          <p>Một email với đường dẫn xác nhận đã được gửi đến email của bạn.</p>
          <p>Vui lòng kiểm tra email.</p>
        </div>
      </Modal>
    </>
  );
};

export default Register;
