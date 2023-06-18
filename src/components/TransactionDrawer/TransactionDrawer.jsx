import { Button, Col, Drawer, Row, Select, Space } from "antd";
import React from "react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./style.scss";
import { useTransition } from "react";
import {
  useGetTransactionsQuery,
  useUpdateTransactionsMutation,
} from "../../store/services/transactionApi";
const options = [
  {
    value: 0,
    label: "PAID",
  },
  {
    value: 1,
    label: "PENDING",
  },
  {
    value: 2,
    label: "UNPAID",
  },
];
const TransactionDrawer = (props) => {
  const [updateTransaction, { data: dataTrans, isLoading, error }] =
    useUpdateTransactionsMutation();
  const { data } = props;
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(data.status);
  const { refetch } = useGetTransactionsQuery();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    updateTransaction({
      id: data.id,
      status: status,
    });
    refetch();
    setOpen(false);
  };
  const handleChange = (value) => {
    setStatus(value);
  };

  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={showDrawer}>
        <BsThreeDotsVertical />
      </div>
      <Drawer
        title="Transaction Detail"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Row gutter={[24, 24]}>
          <Col className="drawer-item-title" span={12}>
            Account Name:{" "}
          </Col>
          <Col span={12}>{data.accountName} </Col>
          <Col className="drawer-item-title" span={12}>
            Day Created:{" "}
          </Col>
          <Col span={12}>{data.dateTime}</Col>
          <Col className="drawer-item-title" span={12}>
            Value:{" "}
          </Col>
          <Col span={12}>
            {new Intl.NumberFormat("en-Us").format(data.value)} VND
          </Col>
          <Col className="drawer-item-title" span={12}>
            Transaction Code:{" "}
          </Col>
          <Col span={12}>{data.dateTime}</Col>
          <Col className="drawer-item-title" span={12}>
            Status:
          </Col>
          <Col span={12}>
            <Select
              options={options}
              defaultValue={status}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Space className="drawer-item-space">
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </Space>
      </Drawer>
    </>
  );
};

export default TransactionDrawer;
