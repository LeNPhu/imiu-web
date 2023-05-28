import "./style.scss";
import React, { useState } from "react";
import { Button, Checkbox, Divider, Form, Input, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/imiu-login.png";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/userSlice";
import { auth, provider } from "../../../utils/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        dispatch(
          login({
            email: data.user.email,
            token: data.user.accessToken,
            withEmail: true,
          })
        );
        navigate(-1);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="form-container">
          <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
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
            <div className="remember-me">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Duy trì đăng nhập</Checkbox>
              </Form.Item>
              <Link to="/" className="green">
                Quên mật khẩu ?
              </Link>
            </div>
            <Form.Item>
              <Button
                block
                type="primary"
                className="register-button"
                htmlType="submit"
                // loading={loading}
                size="large"
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
          <Divider plain>
            <span className="grey">hoặc</span>
          </Divider>
          <Button
            loading={loading}
            onClick={handleSignInWithGoogle}
            style={{ borderColor: "#f8f8f8" }}
            type="default"
            icon={<FcGoogle />}
            block
          >
            Đăng nhập với Google
          </Button>
          <div className="login-here">
            <h5>
              Chưa có tài khoản ?{" "}
              <Link to="/register" className="green">
                Đăng kí
              </Link>
            </h5>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
