import "./style.scss";
import React from "react";
import catBackground from "../../assets/images/cat-background.svg";
import catBread from "../../assets/images/cat-bread.svg";
import { Button, ConfigProvider } from "antd";
const Landing = () => {
  return (
    <div className="landing-container">
      <div className="container">
        <img className="background" src={catBackground} />
        <div className="content">
          <div className="info">
            <span className="title">
              <span className="green">i.Miu</span>, Đồng hành cùng bạn trong mỗi
              bữa ăn
            </span>
            <p>Lên thực đơn cho bữa ăn "Healthy" của bạn ngay bây giờ</p>
            <div className="button">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: " #0CBF1E",
                  },
                  componentSize: {},
                }}
              >
                <Button type="primary" value="large">
                  Lên thực đơn ngay
                </Button>
                <Button value="large">Khám phá</Button>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container second">
        <img className="" src={catBread} />
        <div>
          <p>
            CHÚNG TÔI MANG ĐẾN CHO BẠN NHỮNG{" "}
            <span className="green">BỮA ĂN</span> GIÁ TRỊ NHẤT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
