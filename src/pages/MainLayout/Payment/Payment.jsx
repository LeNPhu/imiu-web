import React from "react";
import "./styles.scss";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { IoRefresh } from "react-icons/io5";
import {
  useGetQrCodeQuery,
  usePaymentMutation,
} from "../../../store/services/paymentApi";
import Loading from "../../../components/Loading/Loading";
import { useSelector } from "react-redux";
import { Button, Space } from "antd";
import { toast } from "react-hot-toast";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { accountId } = useSelector((state) => state.auth);
  const { data, isLoading, refetch } = useGetQrCodeQuery({
    accountId: accountId,
    subscriptionId: location.state?.subId,
  });
  const [payment, { isSuccess, error, isLoading: paymentLoading }] =
    usePaymentMutation();
  const { email } = useSelector((state) => state.auth);
  useEffect(() => {
    if (location.state?.from === "pricing") {
    } else {
      navigate(-1);
    }
  }, [location, navigate]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/question", { state: { from: "payment" } });
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error?.data.message);
    }
  }, [error]);

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
            <p className="card-title">
              {location.state?.item.name == "Premium"
                ? "Premium 🎉"
                : location.state?.item.name}
            </p>
            <p className="card-price">
              {location.state?.item.value == 0
                ? "Free"
                : `${new Intl.NumberFormat("en-US")
                    .format(location.state?.item.value)
                    .replace(",", ".")} ₫`}
              <span
                className={`duration ${
                  location.state?.item.duration === "vĩnh viễn" &&
                  location.state?.item.value != 0
                    ? "green"
                    : ""
                }`}
              >
                {location.state?.item.value != 0
                  ? ` / ${location.state?.item.duration}`
                  : ""}
              </span>
            </p>
            <p className="card-info">
              {location.state?.item.value == 0
                ? "dịch vụ miễn phí"
                : "cho người dùng trả phí"}
            </p>
            {location.state?.item.subscriptionDetails?.map((item) => {
              return (
                <>
                  {item.status == true ? (
                    <p className="">
                      <FcCheckmark /> {item.detail}
                    </p>
                  ) : (
                    <p className="grey">
                      <FcCancel /> {item.detail}
                    </p>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="payment__detail-qr">
          <div className="img-container">
            <img src={data?.data.qrCode} alt="" />
          </div>
          <div className="space">
            <Button
              loading={paymentLoading}
              onClick={() =>
                payment({
                  accountId: accountId,
                  subscriptionId: location.state?.subId,
                  transactionCode: data?.data.transactionCode,
                })
              }
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
      </div>
    </div>
  );
};

export default Payment;
