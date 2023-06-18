import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.scss";
import { useGetTransactionsQuery } from "../../../store/services/transactionApi";
import { Button, Input, Select, Table, Tag } from "antd";
import Loading from "../../../components/Loading/Loading";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import TransactionDrawer from "../../../components/TransactionDrawer/TransactionDrawer";

const columns = [
  {
    title: "Account Name",
    dataIndex: "accountName",
    key: "accountName",
    sorter: (a, b) => a.accountId.localeCompare(b.accountId),
  },
  {
    title: "Date",
    dataIndex: "dateTime",
    key: "dateTime",
    sorter: (a, b) => a.dateTime.localeCompare(b.dateTime),
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    sorter: (a, b) => a.value - b.value,
    render: (value) => {
      return <p>{new Intl.NumberFormat("en-Us").format(value)} VND</p>;
    },
  },
  {
    title: "Code",
    dataIndex: "transactionCode",
    key: "transactionCode",
    sorter: (a, b) => a.transactionCode.localeCompare(b.transactionCode),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",

    render: (status) => {
      switch (status) {
        case 0:
          return (
            <Tag className="tag" icon={<CheckCircleOutlined />} color="green">
              PAID
            </Tag>
          );
        case 1:
          return (
            <Tag className="tag" icon={<SyncOutlined spin />} color="blue">
              PENDING
            </Tag>
          );
        case 2:
          return (
            <Tag className="tag" icon={<CloseCircleOutlined />} color="red">
              UNPAID
            </Tag>
          );
      }
    },
    sorter: (a, b) => a.status - b.status,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (_, record) => <TransactionDrawer data={record} />,
  },
];

const Transaction = () => {
  const { data, isLoading } = useGetTransactionsQuery();
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    setUpdate(
      data?.data.map((obj, index) => ({
        ...obj, // copy existing properties
        key: index, // add index as a property
      }))
    );
  }, [data, data?.data]);
  console.log(data?.data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="transaction-container">
      <h1 className="raleway title">Transaction</h1>
      <div className="table-container">
        <Table columns={columns} dataSource={update} />
      </div>
    </div>
  );
};

export default Transaction;
