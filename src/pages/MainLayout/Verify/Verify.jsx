import React from "react";
import imiu from "../../../assets/images/imiu-menu.svg";
import logo from "../../../assets/images/imiu-register.svg";
import "./styles.scss";
import { Link, useParams } from "react-router-dom";
import { Button } from "antd";
import { useVerifyMutation } from "../../../store/services/authApi";
import { useEffect } from "react";

const Verify = () => {
  const { id, expiration } = useParams();
  const [verify, { isSuccess, isError }] = useVerifyMutation();

  const token = id + "." + expiration + ".";
  console.log("token", token);

  useEffect(() => {
    if (token) {
        verify(token);
    }
  }, [token, verify]);

  return (
    <div className="verify-container">
      <div className="content">
        {isSuccess && (
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
        {isError && (
          <>
            <h1>😥</h1>
            <h1 className="delete">Confirmation failed!</h1>
            <img src={logo} alt="" />
            <b>Xác thực tài khoản thất bại!</b>
            <Link to="/register">
              <Button type="primary">Trở về</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Verify;
