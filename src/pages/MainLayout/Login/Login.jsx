import "./style.scss";
import React, { useState } from "react";
import { Button, Checkbox, Divider, Form, Input, Modal, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/imiu-login.png";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import {
  useLoginMutation,
  useLoginWithGoogleMutation,
  useEmailMutation,
} from "../../../store/services/authApi";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import settingLogo from "../../../assets/images/setting-logo.svg";
import { setAuth } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [
    loginWithGoogle,
    {
      data: dataGG,
      isLoading: isLoadingGG,
      error: errorGG,
    },
  ] = useLoginWithGoogleMutation();
  const [login, { data, isLoading, error }] = useLoginMutation();
  const [
    email,
    {
      data: dataEmail,
      isLoading: isLoadingEmail,
      error: errorEmail,
    },
  ] = useEmailMutation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isVerifyAccount, setIsVerifyAccount] = useState(false);
  useEffect(() => {
    if (data) {
      if (data?.data.isVerify) {
        //Login thanh cong
        toast.success(data.message);
        dispatch(setAuth(data))
      } else {
        //Login thanh cong nhung chua xac thuc tai khoan
        //mo form xac thuc tai khoan
        setIsVerifyAccount(true);
      }
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error.data?.message);
    }
  }, [error]);

  useEffect(() => {
    if (dataGG) {
      Cookies.set("account", JSON.stringify(dataGG?.data), { expires: 1 / 48 });
      toast.success(dataGG.message);
      
    }
  }, [dataGG]);

  useEffect(() => {
    if (errorGG) {
      toast.error(errorGG.data?.message);
    }
  }, [errorGG]);

  useEffect(() => {
    if (dataEmail) {
      toast.success(dataEmail.message);
      setIsVerifyAccount(false);
    }
  }, [dataEmail]);

  useEffect(() => {
    if (errorEmail) {
      toast.error(errorEmail.data?.message);
    }
  }, [errorEmail]);


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
    login(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("error", errorInfo);
  };

  return (
    <>
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
      <Modal
        open={isVerifyAccount}
        centered="true"
        okText="Gửi mail xác thực tài khoản"
        onOk={() => (
          email({ email: Cookies.get("emailTemp") })
        )}
        cancelButtonProps={{ style: { display: "none" } }}
        confirmLoading={isLoadingEmail}
      >
        <div className="modal-confirmation">
          <img src={settingLogo} alt="" loading="lazy" />
          <h2 style={{ color: "red" }}>TÀI KHOẢN CHƯA ĐƯỢC XÁC THỰC</h2>
          <p>Vui lòng xác thực tài khoản qua email tại đây.</p>
        </div>
      </Modal>
    </>
  );
};

export default Login;
