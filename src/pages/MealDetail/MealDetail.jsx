import React from "react";
import "./styles.scss";
const MealDetail = () => {
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
              <h3>Công thức</h3>
            </div>
            <div className="meal__content__detail__nutrition">
              <h3>Giá trị dinh dưỡng</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
