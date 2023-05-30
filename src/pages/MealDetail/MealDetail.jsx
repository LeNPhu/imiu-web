import React from "react";
import "./styles.scss";
import { Col, Radio, Row } from "antd";
import { Link } from "react-router-dom";
const MealDetail = () => {
  const recipe = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg",
      title: "Ướp sườn nướng",
      steps: [
        {
          step: "Sườn cốt lết rửa sạch, chia sườn thành từng lát dầy khoảng gần 1cm. Thấm cho sườn khô ráo rồi đem ướp.",
        },
        {
          step: "Gia vị ướp sườn: 01 muỗng canh nước tương + 01 muỗng canh mật ong + 01 muỗng canh dầu hào + 01 muỗng canh nước mắm + 02 muỗng canh dầu ăn + ½ muỗng canh dầu mè + 03 muỗng canh sữa tươi + 01 muỗng canh tỏi bằm + 1/2 muỗng cà phê tiêu xay + ½ muỗng cà phê ngũ vị hương + 01 lon nước ngọt coca",
        },
        {
          step: "Cho sườn vào hỗn hợp gia vị ướp để tủ lạnh ngăn mát qua một ngày cho thịt thấm gia vị.Cho sườn vào hỗn hợp gia vị ướp để tủ lạnh ngăn mát qua một ngày cho thịt thấm gia vị.",
        },
      ],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg",
      title: "Ướp sườn nướng",
      steps: [
        {
          step: "Sườn cốt lết rửa sạch, chia sườn thành từng lát dầy khoảng gần 1cm. Thấm cho sườn khô ráo rồi đem ướp.",
        },
        {
          step: "Gia vị ướp sườn: 01 muỗng canh nước tương + 01 muỗng canh mật ong + 01 muỗng canh dầu hào + 01 muỗng canh nước mắm + 02 muỗng canh dầu ăn + ½ muỗng canh dầu mè + 03 muỗng canh sữa tươi + 01 muỗng canh tỏi bằm + 1/2 muỗng cà phê tiêu xay + ½ muỗng cà phê ngũ vị hương + 01 lon nước ngọt coca",
        },
        {
          step: "Cho sườn vào hỗn hợp gia vị ướp để tủ lạnh ngăn mát qua một ngày cho thịt thấm gia vị.Cho sườn vào hỗn hợp gia vị ướp để tủ lạnh ngăn mát qua một ngày cho thịt thấm gia vị.",
        },
      ],
    },
  ];
  const nutrition = [
    {
      name: "Năng lượng (kJ)",
      amount: "0kJ",
    },
    {
      name: "Calories",
      amount: "1000 kcal",
    },
    {
      name: "Chất béo ",
      amount: "40 g",
    },
    {
      name: "Chất béo bão hoà",
      amount: "59 g",
    },
    {
      name: "Lượng đường",
      amount: "8 g",
    },
    {
      name: "Chất xơ",
      amount: "100 g",
    },
    {
      name: "Chất đạm",
      amount: "45 g",
    },
    {
      name: "Cholesterol",
      amount: "95 mg",
    },
    {
      name: "Natri",
      amount: "900 mg",
    },
  ];
  const ingredients = [
    {
      quantity: "500 gram",
      name: "Thịt sườn cốt lết",
    },
    {
      quantity: "500 gram",
      name: "Thịt nạc heo xay",
    },
    {
      quantity: "300 gram",
      name: "Gạo tấm",
    },
    {
      quantity: "500 gram",
      name: "Thịt sườn cốt lết",
    },
    {
      quantity: "500 gram",
      name: "Thịt nạc heo xay",
    },
    {
      quantity: "300 gram",
      name: "Gạo tấm",
    },
  ];
  const spices = [
    {
      quantity: "10 gram",
      name: "Mật ong",
    },
    {
      quantity: "10 gram",
      name: "Dầu hào",
    },
    {
      quantity: "10 gram",
      name: "Nước mắm",
    },
    {
      quantity: "10 gram",
      name: "Mật ong",
    },
    {
      quantity: "10 gram",
      name: "Dầu hào",
    },
    {
      quantity: "10 gram",
      name: "Nước mắm",
    },
  ];
  return (
    <div className="meal">
      <div className="meal__img">
        <img
          src="https://img.hellofresh.com/q_30,w_1920,f_auto,c_limit,fl_lossy/hellofresh_s3/image/643eddbd9acf36d68c0aa18b-7adf9c42.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <div className="meal__content">
          <div className="meal__content__description">
            <h2>Cơm tấm sườn bì chả</h2>
            <div className="meal__content__description__flex">
              <div className="meal__content__description__flex__summarize">
                Cơm tấm - Một trong những món được gọi là đặc trưng của ẩm thực
                Sài Gòn. Hạt tấm nhuyễn, khi thành cơm phải hội tụ đủ yếu tố tơi
                và ráo. Sườn ướp kỹ đậm đà, không được để quá khô, cũng không
                được mất đi vẻ óng ả của miếng thịt. Nói thì khó vậy thôi, khi
                đã có định lượng thì dễ làm như chơi. Nói đến đặc trưng khi
                chiêu đãi thì cơm tấm là lựa chọn đúng đắn cho dịp cuối tuần
                chiêu đãi bạn bè và đổi vị cho cả gia đình!
              </div>
              <div className="meal__content__description__flex__detail">
                <div>
                  <b>Thời gian nấu ăn</b>
                  <p>2 tiếng</p>
                </div>
                <div>
                  <b>Độ khó</b>
                  <p>Khó</p>
                </div>
              </div>
            </div>
            <div className="meal__content__description__tags">
              <b>Tag:</b>
              <div className="meal__content__description__tags__item">Tim</div>
              <div className="meal__content__description__tags__item">Gan</div>
            </div>
            <div className="meal__content__description__tags">
              <b>Chất gây dị ứng</b>
              <div className="meal__content__description__tags__item">Cá</div>
              <div className="meal__content__description__tags__item">
                Trứng
              </div>
            </div>
          </div>
          <div className="meal__content__detail">
            <div className="meal__content__detail__recipe">
              <div className="meal__content__detail__recipe__header">
                <h3>Công thức</h3>
                <div className="meal__content__detail__recipe__header__portion">
                  <p>Khẩu phần ăn</p>
                  <Radio.Group defaultValue={1} buttonStyle="solid">
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
                  {ingredients.map((item, index) => {
                    return (
                      <Col key={index} span={12}>
                        <p>
                          {item.name}: {item.quantity}
                        </p>
                      </Col>
                    );
                  })}
                </Row>
              </div>
              <div className="meal__content__detail__recipe__item">
                <h4>Gia vị</h4>
                <Row
                  className="meal__content__detail__recipe__item__row"
                  gutter={[16, 24]}
                >
                  {spices.map((item, index) => {
                    return (
                      <Col key={index} span={12}>
                        <p>
                          {item.name}: {item.quantity}
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
                {nutrition.map((item) => {
                  return (
                    <>
                      <Col span={12} style={{ fontWeight: "700" }}>
                        {item.name}
                      </Col>
                      <Col span={12} style={{ textAlign: "end" }}>
                        {item.amount}
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
              {recipe.map((item) => {
                return (
                  <>
                    <Col span={8}>
                      <img
                        className="meal__content__recipe__image"
                        src={item.image}
                      />
                    </Col>
                    <Col span={16} className="meal__content__recipe__content">
                      <p className="meal__content__recipe__content__title">
                        {item.title}
                      </p>
                      <ul>
                        {item.steps.map((item, index) => {
                          return <li key={index}>{item.step}</li>;
                        })}
                      </ul>
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
