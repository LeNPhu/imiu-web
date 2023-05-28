import "./style.scss";
import React from "react";
import catBackground from "../../../assets/images/cat-background.svg";
import catBread from "../../../assets/images/cat-bread.svg";
import fourFood from "../../../assets/images/four-food.svg";
import giaDinhGiau from "../../../assets/images/gia-dinh-giau.svg";
import landingFood from "../../../assets/images/landing-food.svg";
import conChoNau from "../../../assets/images/con-cho-nau.svg";
import emBeNauAn from "../../../assets/images/em-be-nau-an.svg";
import trendIcon from "../../../assets/images/trend-icon.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Button, Col, Row } from "antd";
import "animate.css/animate.min.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickScroll = () => {
    const element = document.getElementById("second");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="landing-container">
      <section className="container first">
        <img className="background" src={catBackground} />
        <div className="content">
          <div className="info">
            <span className="title raleway">
              <span className="green">i.Miu</span>, Đồng hành cùng bạn trong mỗi
              bữa ăn
            </span>
            <p>Lên thực đơn cho bữa ăn "Healthy" của bạn ngay bây giờ</p>
            <div className="button">
              <Link to="/menu">
                <Button type="primary" value="large">
                  Lên thực đơn ngay
                </Button>
              </Link>
              <Button onClick={handleClickScroll} value="large">
                Khám phá
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce="true">
        <section id="second" className="container second">
          <Row>
            <Col span={12}>
              <div className="center">
                <img className="big-img" src={catBread} />
              </div>
            </Col>
            <Col span={12}>
              <div className="content">
                <p className="content-title">
                  CHÚNG TÔI MANG ĐẾN CHO BẠN NHỮNG{" "}
                  <span className="green">BỮA ĂN</span> GIÁ TRỊ NHẤT
                </p>

                <div className="content-card">
                  <img src={trendIcon} />

                  <p>
                    <span className="green card-title">THỰC ĐƠN ĐA DẠNG</span>
                    <br />
                    i.Miu cập nhật liên tục hàng nghìn món ăn đa dạng từ khắp
                    nơi trên thế giới phù hợp với từng hộ gia đình
                  </p>
                </div>
                <div className="content-card">
                  <img src={trendIcon} />

                  <p>
                    <span className="green card-title">
                      THỰC ĐƠN CÁ NHÂN HÓA
                    </span>
                    <br />
                    Gợi ý, tư vấn chế độ ăn uống, dinh dưỡng, thực đơn phù hợp
                    cho thể trạng sức khoẻ mỗi cá nhân
                  </p>
                </div>
                <div className="content-card">
                  <img src={trendIcon} />

                  <p>
                    <span className="green card-title">
                      CUNG CẤP ĐẦY ĐỦ THÔNG TIN DINH DƯỠNG
                    </span>
                    <br />
                    Cung cấp đầy đủ chi tiết thông tin giá trị dinh dưỡng, thành
                    phần chi tiết trong mỗi bữa ăn
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__zoomIn" animateOnce="true">
        <section className="container third">
          <Row>
            <Col span={12}>
              <div className="content">
                <p className="title raleway">
                  Thực đơn của <span className="green">người Việt</span>, cho{" "}
                  <span>nguời Việt</span>
                </p>
                <p className="info">
                  Chúng tôi mang đến cho các bạn trải nghiệm ẩm thực Việt Nam
                  phong phú mà chưa website nào có từ trước tới nay
                </p>
                <div style={{ width: "100%" }}>
                  <Link to="/menu">
                    <Button type="primary" size="large">
                      Xem thử thực đơn miễn phí ngay
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <img src={fourFood} />
            </Col>
          </Row>
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce="true">
        <div className="container fourth">
          <span className="title raleway">
            Chia sẻ cùng <span className="green">I.Miu</span>
          </span>
          <div className="card-container">
            <div className="card">
              <div className="img-container">
                <img className="card-img" src={emBeNauAn} />
              </div>
              <div className="card-content">
                <span className="card-name">EmBéNấuĂn</span>
                <p>
                  Con tôi cũng có thể nấu cho bữa tối hôm nay. Món ăn đơn giản
                  nhưng chất lượng cho cả gia đình.
                  <br /> #iMiu
                </p>
              </div>
            </div>
            <div className="card">
              <div className="img-container">
                <img className="card-img" src={giaDinhGiau} />
              </div>
              <div className="card-content">
                <span className="card-name">GiaĐìnhGiàu</span>
                <p>
                  Một bữa ăn không chỉ ngon mà còn bổ sung đầy đủ chất dinh
                  dưỡng sau một ngày dài mêt mỏi.
                  <br /> #Nhiềutiền #iMiu
                </p>
              </div>
            </div>
            <div className="card">
              <div className="img-container">
                <img className="card-img" src={conChoNau} />
              </div>
              <div className="card-content">
                <span className="card-name">Conchónâu</span>
                <p>
                  Món ăn dễ nấu, ngay cả tôi cũng có thể tự nấu được
                  <br /> #Gâu #iMiu
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <div className="container fifth">
          <p className="title raleway">
            Lên <span className="green">thực đơn dinh dưỡng</span> của bạn ngay
            bây giờ
          </p>
          <img src={landingFood} />
          <Link to="/menu">
            <Button type="primary" size="large">
              Bắt đầu lên thực đơn ngay
            </Button>
          </Link>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Home;
