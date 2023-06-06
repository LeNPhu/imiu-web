import React from "react";
import "./styles.scss";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { IoRefresh } from "react-icons/io5";
import { useGetQrCodeQuery } from "../../../store/services/paymentApi";
import Loading from "../../../components/Loading/Loading";
import { useSelector } from "react-redux";
import { Button, Space } from "antd";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { accountId } = useSelector((state) => state.auth);
  console.log("accountId", accountId);
  const { data, error, isLoading, refetch } = useGetQrCodeQuery({
    accountId: accountId,
    subscriptionId: location.state?.subId,
  });
  const { email } = useSelector((state) => state.auth);
  console.log("location", location);
  console.log("data", data);
  useEffect(() => {
    if (location.state?.from === "pricing") {
    } else {
      navigate(-1);
    }
  }, [location, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="payment">
      <div className="payment__detail">
        <div className="payment__detail-item">
          <h1>Chi tiết thanh toán</h1>
          <div className="payment__detail-item__user-info">
            <h3>Thông tin cá nhân</h3>
            <div className="payment__detail-item__user-info__item">
              <p>Info:</p>
              <b>{email}</b>
            </div>
            <div className="payment__detail-item__user-info__item">
              <p>Code:</p>
              <b>{data?.data.transactionCode}</b>
            </div>
          </div>
          <div className="card">
            <p className="card-title">Premium 🎉</p>
            <p className="card-price">
              250.000 ₫ <span className="duration green">/ vĩnh viễn</span>
            </p>
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
            <b className="green">
              <FcCheckmark /> Cá nhân hóa thực đơn theo tình trạng sức khỏe.
            </b>
            <b className="green">
              <FcCheckmark /> Cho phép lưu lại các món ăn yêu thích.
            </b>
          </div>
          <div className="space">
            <Button
              style={{
                width: "80%",
              }}
              type="primary"
            >
              Tôi đã thanh toán
            </Button>
            <Button
              style={{
                width: "15%",
              }}
              onClick={() => refetch()}
            >
              <IoRefresh />
            </Button>
          </div>
        </div>
        <div className="payment__detail-qr">
          <img src={data?.data.qrCode} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
