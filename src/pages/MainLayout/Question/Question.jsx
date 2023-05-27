import React from "react";
import questionImg from "../../../assets/images/imiu-question.svg";
import { Button, InputNumber, Popconfirm } from "antd";
import "./styles.scss";

const Question = () => {
  const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  return (
    <div className="question">
      <div className="question__wrapper">
        <h2>
          Cho <span className="green">i.Miu</span> biết một số thông tin của bạn
          nhé
        </h2>
        <div className="question__item">
          <h5>Vui lòng cho biết số lượng người tham gia bữa ăn:</h5>
          <div className="question__item__answer">
            <div className="question__item__answer__item circle">1</div>
            <div className="question__item__answer__item circle active">2</div>
            <div className="question__item__answer__item circle">3</div>
            <div className="question__item__answer__item circle">4</div>
            <div className="question__item__answer__item circle">5</div>
            <div className="question__item__answer__item circle">6</div>
          </div>
        </div>
        <div className="question__item">
          <h5>
            Trong các thành viên có thành viên nào bị mắc các chứng bệnh sau đây
            không?
          </h5>
          <div className="question__item__answer">
            <div className="question__item__answer__item">Bệnh tim</div>
            <div className="question__item__answer__item">Cao huyết áp</div>
            <div className="question__item__answer__item">Tiểu đường</div>
            <div className="question__item__answer__item">Suy dinh dưỡng</div>
            <div className="question__item__answer__item">Béo phì</div>
            <div className="question__item__answer__item">Thận</div>
            <div className="question__item__answer__item">Dạ dày</div>
            <div className="question__item__answer__item">Gan</div>
            <div className="question__item__answer__item active">Không có</div>
          </div>
        </div>
        <div className="question__item">
          <h5>
            Trong các thành viên có thành viên nào di ứng với thành phần nguyên
            liệu nào không?
          </h5>
          <div className="question__item__answer">
            <div className="question__item__answer__item">con heo</div>
            <div className="question__item__answer__item">con bof</div>
            <div className="question__item__answer__item">con bof</div>
            <div className="question__item__answer__item">con bof</div>
            <div className="question__item__answer__item">con bof</div>
            <div className="question__item__answer__item">con bof</div>
            <div className="question__item__answer__item">con bof</div>
            <div className="question__item__answer__item active">Không có</div>
          </div>
        </div>
        <div className="question__item">
          <h5>Bạn là người ăn chay?</h5>
          <div className="question__item__answer">
            <div className="question__item__answer__item active">Không</div>
            <div className="question__item__answer__item">Có</div>
          </div>
        </div>
        <div className="question__item">
          <h5>Mức Calories trong một bữa ăn mà bạn mong muốn?</h5>
          <div className="question__item__answer">
            <InputNumber min={500} max={700} defaultValue={667} />
            -
            <InputNumber min={700} max={1200} defaultValue={767} />
            <h5>calories / người</h5>
          </div>
          <i style={{ fontSize: "12px" }}>
            Theo khuyến nghị của các chuyên gia dinh dưỡng, cơ thể của người
            trưởng thành cần được cung cấp từ <b>2.000 - 2.300</b> calo mỗi
            ngày. Có thể thấy, với thói quen ăn 3 bữa mỗi ngày của đại đa số
            người Việt thì mỗi bữa ăn cơ thể cần khoảng <b> 667 - 767</b> calo.
          </i>
          <Popconfirm
            title="Bạn có chắc chắn với câu trả lời của mình?"
            description="Đừng lo, bạn vẫn có thể thay đổi câu trả lời trong phần Quản lý tài khoản."
            onConfirm={confirm}
            onCancel={cancel}
            okText="Tôi chắc chắc"
            cancelText="Chưa"
            placement="topRight"
          >
            <Button type="primary">Tiến tới thực đơn của bạn ngay thôi</Button>
          </Popconfirm>
        </div>
      </div>
      <div className="question__img">
        <div className="img-container">
          <img src={questionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Question;
