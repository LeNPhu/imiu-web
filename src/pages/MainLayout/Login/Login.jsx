import "./style.scss";
import React, { useState } from "react";
import { Button, Checkbox, Divider, Form, Input, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/imiu-login.png";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { login } from "../../../store/userSlice";
import { auth, provider } from "../../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import {
  useLoginMutation,
  useLoginWithGoogleMutation,
} from "../../../store/services/authApi";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginWithGoogle, { data: dataGG, isLoading: isLoadingGG, isSuccess: isSuccessGG, error: errorGG } ] =
    useLoginWithGoogleMutation();
  const [login, { data, isLoading, isSuccess, error }] = useLoginMutation();
console.log("data", dataGG);
console.log("eror", errorGG);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (data && data?.data.isVerify) {
      //Login thanh cong
      Cookies.set("accessToken", data?.data.accessToken, { expires: 1 / 48 }); //1 tieng
      Cookies.set("role", data?.data.role, { expires: 1 / 48 }); //1 tieng

      toast.success(data.data?.message)
    }
  },[data])

  useEffect(() => {
    if (error) {
      toast.error(error.data?.message)



      //mo form xac thuc tai khoan
    }
  },[error])

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);

        loginWithGoogle({
          accessToken: data._tokenResponse.oauthIdToken,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const onFinish = (values) => {
    Cookies.set("emailTemp", values.email, { expires: 1 / 150, path: "" });
    login(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("error", errorInfo);
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="form-container">
          <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
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
                loading={isLoading}
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
            loading={isLoadingGG}
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
