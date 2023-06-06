import React, { useEffect } from "react";
import pricingBanner from "../../../assets/images/pricing-banner.svg";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import "./style.scss";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useSubscriptionsQuery } from "../../../store/services/subscriptionApi";
import Loading from "../../../components/Loading/Loading";

const Pricing = () => {
  const navigate = useNavigate();
  const { isVerified, subscription } = useSelector((state) => state.auth);
  const { data, error, isLoading } = useSubscriptionsQuery();
  console.log("sub", subscription);
  console.log("data", data);

  const checkUser = (type, subId) => {
    console.log(type);
    var state = { state: { from: 'pricing',subId: subId }}
    if (isVerified && type == "Free") {
      navigate("/menu", state);
    } else if (isVerified) {
      navigate("/payment", state);
    } else {
      navigate("/login");
    }
  };

  if (isLoading) {
    return <Loading/>
  }
  return (
    <div className="pricing-container">
      <img className="banner" src={pricingBanner} />
      <div className="content">
        {data?.data.map((item, index) => {
          return (
            <div key={index} className="card">
              <p className="card-title">
                {item.name == "Premium" ? "Premium 🎉" : item.name}
              </p>
              <p className="card-price">
                {item.value == 0
                  ? "Free"
                  : `${new Intl.NumberFormat("en-US")
                      .format(item.value)
                      .replace(",", ".")} ₫`}
                <span
                  className={`duration ${
                    item.duration === "vĩnh viễn" && item.value != 0
                      ? "green"
                      : ""
                  }`}
                >
                  {item.value != 0 ? ` / ${item.duration}` : ""}
                </span>
              </p>
              <p className="card-info">
                {item.value == 0
                  ? "dịch vụ miễn phí"
                  : "cho người dùng trả phí"}
              </p>
              {item.subscriptionDetails?.map((item) => {
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

              <div className="button">
                <Button disabled={item.name == subscription} onClick={() => checkUser(subscription, item.id)} block type="primary">
                  <b>Bắt đầu</b>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
