import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.scss";
import { useGetTransactionsQuery } from "../../../store/services/transactionApi";
import { Button, Select, Table } from "antd";
const options = [
  {
    value: "PAID",
    label: "PAID",
  },
  {
    value: "PENDING",
    label: "PENDING",
  },
  {
    value: "UNPAID",
    label: "UNPAID",
  },
];
const columns = [
  {
    title: "Account ID",
    dataIndex: "accountId",
    key: "accountId",
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
      return (
        <>
          <p>{status}</p>
          <Select
            style={{ width: "100%" }}
            bordered={false}
            options={options}
            defaultValue={status}
          />
        </>
      );
    },
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
];

const Transaction = () => {
  const data = useGetTransactionsQuery()?.data?.data;

  console.log(data);
  return (
    <div className="transaction-container">
      <h1 className="raleway title">Transaction</h1>
      <div className="table-container">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Transaction;
