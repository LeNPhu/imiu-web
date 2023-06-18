import React, { useState } from "react";
import "./style.scss";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import { toast } from "react-hot-toast";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/authSlice";
const AccountDetail = () => {
  const dispatch = useDispatch();
  const dateFormat = "DD/MM/YYYY";
  const options = [
    {
      value: "M",
      label: "Nam",
    },
    {
      value: "F",
      label: "Nữ",
    },
    {
      value: "O",
      label: "Khác",
    },
  ];
  const [data, setData] = useState([
    {
      name: ["username"],
      value: "BuaAnLanhManhCuaGiaDinh",
    },
    {
      name: ["email"],
      value: "email@email.com",
    },
    {
      name: ["date-of-birth"],
      value: dayjs("11/03/2002", dateFormat),
    },
    {
      name: ["gender"],
      value: "Nam",
    },
    {
      name: ["country"],
      value: "VietNam",
    },
  ]);

  const onFinish = (values) => {
    toast.success("success");
    console.log("Success:", values);
  };
  const onFinishFailed = () => {
    toast.error("error");
  };
  return (
    <>
      <span className="title raleway">Tổng quan về tài khoản</span>
      <div className="profile content-item">
        <p className="item-title">Hồ sơ</p>
        <Form
          className="form-antd"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 12 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          fields={data}
          onChange={(newDatas) => {
            setData(newDatas);
          }}
        >
          <Form.Item
            className="form-antd-item"
            label="Tên người dùng"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên của bạn",
              },
            ]}
          >
            <Input bordered={false} />
          </Form.Item>
          <Form.Item
            className="form-antd-item"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email của bạn",
              },
            ]}
          >
            <Input bordered={false} />
          </Form.Item>
          <Form.Item
            className="form-antd-item"
            label="Ngày sinh (dd/mm/yyyy)"
            name="date-of-birth"
          >
            <DatePicker
              format={dateFormat}
              bordered={false}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item className="form-antd-item" label="Giới tính" name="gender">
            <Select
              style={{
                width: "100%",
              }}
              options={options}
              bordered={false}
            ></Select>
          </Form.Item>
          <Form.Item
            className="form-antd-item"
            label="Quốc gia hoặc khu vực"
            name="country"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập quốc gia của bạn",
              },
            ]}
          >
            <Input bordered={false} />
          </Form.Item>

          <Form.Item className="form-antd-item last" wrapperCol={{}}>
            <Button type="primary" htmlType="submit">
              Chỉnh sửa hồ sơ
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="package content-item">
        <p className="item-title">Gói của bạn</p>
        <div className="package-container">
          <span className="package-title raleway green ">PREMIUM</span>

          <div className="package-content">
            <span className="package-time raleway green">12 Thang</span>

            <div className="divider"></div>

            <Row gutter={[12, 24]}>
              <Col span={12}>
                <p className="">Số lượng công thức món ăn:</p>
              </Col>
              <Col span={12}>
                <p className="bold">Tất cả công thức Menu của i.Miu</p>
              </Col>

              <Col span={12}>
                <p className="">Tính năng:</p>
              </Col>
              <Col span={12}>
                <p className="bold">
                  - Giá trị dinh dưỡng chi tiết của nguyên liệu trong thực đơn.
                </p>
                <p className="bold">
                  - Cá nhân hoá thực đơn theo tình trạng sức khoẻ{" "}
                  <span className="green">(tối đa 6 người )</span>
                </p>
                <p className="bold">- Gợi ý món ăn xoay tua theo tuần</p>
              </Col>

              <Col span={12}>
                <p className="">Tổng chi phí tháng:</p>
              </Col>
              <Col span={12}>
                <p className="bold">1000,000 VNĐ</p>
              </Col>

              <Col span={12}>
                <p className="">Tổng chi phí ngày:</p>
              </Col>
              <Col span={12}>
                <p className="bold">1000,000 VNĐ</p>
              </Col>
            </Row>
          </div>
        </div>
        <Button type="primary">Thay đổi gói dịch vụ</Button>
      </div>
      <div className="logout content-item">
        <p className="item-title">Đăng xuất</p>
        <p>
          Thao tác này sẽ giúp bạn đăng xuất trên tất cả trình phát trên website
          ở các thiết bị điện tử mà bạn đã đăng nhập. Nếu phát hiện có hành động
          bất thường nào hãy{" "}
          <Link className="green" to={"setting/security"}>
            đổi mật khẩu
          </Link>{" "}
          để bảo toàn tài khoản của mình.
        </p>
        <Button type="primary" onClick={() => dispatch(logout())}>
          Đăng xuất
        </Button>
      </div>
    </>
  );
};

export default AccountDetail;
