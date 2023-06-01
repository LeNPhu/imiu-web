import React from "react";
import imiu from "../../../assets/images/imiu-menu.svg";
import logo from "../../../assets/images/imiu-register.svg";
import "./styles.scss";
import { Link, useParams } from "react-router-dom";
import { Button, Space } from "antd";
import {
  useEmailMutation,
  useVerifyMutation,
} from "../../../store/services/authApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

const Verify = () => {
  const { id, expiration } = useParams();
  const [
    verify,
    { isSuccess: isSuccessVerify, isError: isErrorVerify, error: errorVerify },
  ] = useVerifyMutation();
  const [
    email,
    { isSuccess: isSuccessEmail, isError: isErrorEmail, error: errorEmail },
  ] = useEmailMutation();

  const emailTemp =  Cookies.get("emailTemp")

  const token = id + "." + expiration + ".";
  console.log("token", token);

  useEffect(() => {
    if (token) {
      verify(token);
    }
  }, [token, verify]);

  useEffect(() => {
    if (errorVerify) {
      toast.error(errorVerify.data.message);
    }
  }, [errorVerify]);

  useEffect(() => {
    if (errorEmail) {
      toast.error(errorEmail.data?.message);
    }
  }, [errorEmail]);

  return (
    <div className="verify-container">
      <div className="content">
        {isSuccessVerify && (
          <>
            <h1>🎉</h1>
            <h1 className="green">Congratulation!</h1>
            <img src={imiu} alt="" />
            <b>Đã xác thực tài khoản thành công!</b>
            <Link to="/login">
              <Button type="primary">Let's cook!</Button>
            </Link>
          </>
        )}
        {isErrorVerify && (
          <>
            <h1>😥</h1>
            <h1 className="delete">Confirmation failed!</h1>
            <img src={logo} alt="" />
            <b>Xác thực tài khoản thất bại!</b>
            <div className="action">
              <Button type="primary" onClick={() => email({email: emailTemp})}>Gửi lại mail xác nhận</Button>
              <Link to="/register">
                <Button type="default" style={{ marginLeft: "1rem" }}>
                  Trở về
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Verify;
