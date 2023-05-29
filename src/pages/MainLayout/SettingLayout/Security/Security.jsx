import React from "react";
import "./style.scss";
import { Button, Form, Input } from "antd";
import { toast } from "react-hot-toast";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
const Security = () => {
  const onFinish = (values) => {
    toast.success("success");
    console.log("Success:", values);
  };
  const onFinishFailed = () => {
    toast.error("error");
  };
  return (
    <>
      <span className="title raleway">Thay đổi mật khẩu</span>
      <Form
        className="form-antd"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onChange={(newDatas) => {
          setData(newDatas);
        }}
      >
        <Form.Item
          className="form-antd-item"
          label="Mật khẩu hiện tại"
          name="current-password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu hiện tại",
            },
          ]}
        >
          <Input.Password
            bordered={false}
            placeholder="curent password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          className="form-antd-item"
          label="Mật khẩu mới"
          name="new-password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu mới",
            },
          ]}
        >
          <Input.Password
            bordered={false}
            placeholder="new password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item
          className="form-antd-item"
          label="Nhập lại mật khẩu mới"
          name="confirm-password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Vui lòng xác nhận mật khẩu",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Hai mật khẩu không trùng nhau!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            bordered={false}
            placeholder="confirm password"
            dependencies={["new-password"]}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item className="form-antd-item last" wrapperCol={{}}>
          <Button type="primary" htmlType="submit">
            Đặt mật khẩu mới
          </Button>
        </Form.Item>
      </Form>
      <div className="content-item"></div>
    </>
  );
};

export default Security;
