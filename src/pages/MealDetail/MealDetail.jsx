import React, { useState } from "react";
import "./styles.scss";
import { useParams } from "react-router";
import { Col, Radio, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import { useGetMealDetailQuery } from "../../store/services/menuApi";

const MealDetail = () => {
  const { id } = useParams();
  const detail = useGetMealDetailQuery(id)?.data?.data;
  const [portion, setPortion] = useState(1);
  const handleChange = (e) => {
    setPortion(e.target.value);
  };
  return (
    <div className="meal">
      <div className="meal__img">
        <img src="" alt="" />
      </div>
      <div className="content">
        <div className="meal__content">
          <div className="meal__content__description">
            <h2>{detail?.name}</h2>
            <div className="meal__content__description__flex">
              <div className="meal__content__description__flex__summarize">
                {detail?.summary}
              </div>
              <div className="meal__content__description__flex__detail">
                <div>
                  <b>Thời gian nấu ăn</b>
                  <p>{detail?.cookingTime} phút</p>
                </div>
                <div>
                  <b>Độ khó</b>
                  <p>
                    {(() => {
                      switch (detail?.difficulty) {
                        case 1:
                          return "Dễ";
                        case 2:
                          return "Vừa";
                        case 3:
                          return "Khó";
                        default:
                          return "Không xác định";
                      }
                    })()}
                  </p>
                </div>
              </div>
            </div>
            <div className="meal__content__description__tags">
              <b>Tag:</b>
              {detail?.mealTags?.map((item, index) => {
                return (
                  <Tag color="#0CBF1E" key={index}>
                    {item.name}
                  </Tag>
                );
              })}
            </div>
          </div>
          <div className="meal__content__detail">
            <div className="meal__content__detail__recipe">
              <div className="meal__content__detail__recipe__header">
                <h3>Công thức</h3>
                <div className="meal__content__detail__recipe__header__portion">
                  <p>Khẩu phần ăn</p>
                  <Radio.Group
                    defaultValue={portion}
                    buttonStyle="solid"
                    onChange={handleChange}
                  >
                    <Radio.Button value={1}>1</Radio.Button>
                    <Radio.Button value={2}>2</Radio.Button>
                    <Radio.Button value={3}>3</Radio.Button>
                    <Radio.Button value={4}>4</Radio.Button>
                    <Radio.Button value={5}>5</Radio.Button>
                    <Radio.Button value={6}>6</Radio.Button>
                  </Radio.Group>
                </div>
              </div>

              <div className="meal__content__detail__recipe__item">
                <h4>Nguyên liệu</h4>
                <Row
                  className="meal__content__detail__recipe__item__row"
                  gutter={[16, 24]}
                >
                  {detail?.mealIngredients.map((item, index) => {
                    return (
                      <Col key={index} span={12}>
                        <p>
                          {item.name}: {item.quantity * portion} {item.unit}
                        </p>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
            <div className="meal__content__detail__nutrition">
              <div className="meal__content__detail__nutrition__header">
                <h3>Giá trị dinh dưỡng</h3>
                <p style={{ marginLeft: "auto" }}> /theo khẩu phần ăn</p>
              </div>
              <Row
                gutter={[16, 20]}
                className="meal__content__detail__nutrition__content"
              >
                {detail?.nutritionFacts.map((item, index) => {
                  return (
                    <>
                      <Col
                        key={index + "name"}
                        span={12}
                        style={{ fontWeight: "700" }}
                      >
                        {item.name}
                      </Col>
                      <Col
                        key={index + "value"}
                        span={12}
                        style={{ textAlign: "end" }}
                      >
                        {item.value} {item.unit}
                      </Col>
                    </>
                  );
                })}
                <p style={{ fontSize: "1.4rem" }}>
                  Do các vị trí địa lý khác nhau mà g sản phẩm, thành phần dinh
                  dưỡng trên mỗi bữa ăn có thể khác nhau tùy theo từng , tùy
                  thuộc vào khu vực, vùng miền bạn đang sinh sống.
                </p>
                <Link to="" className="green" style={{ fontSize: "1.4rem" }}>
                  Xem chi tiết giá trị dinh dưỡng trong từng thành thành phần
                  nguyên liệu
                </Link>
              </Row>
            </div>
          </div>
          <div className="meal__content__recipe">
            <h3>Các bước tiến hành</h3>
            <Row gutter={[24, 24]}>
              {detail?.directions.map((item, index) => {
                return (
                  <>
                    <Col
                      key={index}
                      span={24}
                      className="meal__content__recipe__content"
                    >
                      <p className="meal__content__recipe__content__title">
                        Bước {item.stepNumber}:
                      </p>

                      <li className="meal__content__recipe__content__detail">
                        {item.instruction}
                      </li>
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
