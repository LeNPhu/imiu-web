import React from "react";

import { MdTrendingDown, MdTrendingUp } from "react-icons/md";
import "./style.scss";
import { Space, Table, Tag } from "antd";
import { useSelector } from "react-redux";
import CustomCard from "../../../components/CustomCard/CustomCard";
import CustomChart from "../../../components/CustomChart/CustomChart";
import {
  useGetCustomerQuery,
  useGetMonthRevenueQuery,
  useGetYearRevenueQuery,
} from "../../../store/services/dashboardApi";
import { useState } from "react";
import { useEffect } from "react";

const AdminDashboard = () => {
  const users = useSelector((state) => state.auth.email);
  const { data: monthRev, isLoading: monthLoad } = useGetMonthRevenueQuery({
    month: 1 + new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const { data: user, isLoading } = useGetCustomerQuery();
  const { data: yearRev, isLoading: yearLoad } = useGetYearRevenueQuery(
    new Date().getFullYear()
  );
  const [paidData, setPaidData] = useState();

  useEffect(() => {
    yearRev
      ? setPaidData(yearRev.data.find((elements) => elements.type == "Paid"))
      : null;
  }, [yearRev]);
  console.log(monthRev);
  const data = [
    {
      title: "Paid Transactions",
      amount: monthRev?.data?.paid,
      change: {
        value: "16%",
        status: "up",
      },
    },
    {
      title: "Unpaid Transactions",
      amount: monthRev?.data?.unpaid,
      change: {
        value: "10%",
        status: "down",
      },
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "UNPAID") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["PAID"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["UNPAID"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["PENDING"],
    },
  ];

  return (
    <div className="home-container">
      <div className="page-title">
        <h1>
          <span className="green">Hello</span> {users} 👋
        </h1>
        <p>Let's check stats today!</p>
      </div>
      <div className="statistic-wrapper">
        <div className="statistic-change-wrapper">
          {data.map((item, index) => {
            return (
              <div key={index} className="custom-card-mini">
                <h5 className="card-title">{item.title}</h5>
                <div className="card-content">
                  <div className="value">{item.amount}</div>
                  <div className="value-change">
                    {item.change?.status === "up" ? (
                      <div className="up">
                        <MdTrendingUp /> {item.change?.value}
                      </div>
                    ) : (
                      <div className="down">
                        <MdTrendingDown /> {item.change?.value}
                      </div>
                    )}
                    <span>vs last month</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="chart-revenue-element">
          <CustomCard width="100%">
            <h3 className="card-title">User</h3>
            <CustomChart type="doughnut" user={user?.data} />
          </CustomCard>
        </div>
      </div>
      <div className="chart-wrapper">
        <CustomCard width="50%" height="300px">
          <h3 className="card-title">User Trends</h3>

          <CustomChart type="line" />
        </CustomCard>
        <CustomCard width="50%" height="300px">
          <h3 className="card-title">Revenue</h3>

          <CustomChart type="bar" paidData={paidData?.data} />
        </CustomCard>
      </div>
      <div className="table-wrapper">
        <CustomCard width="100%">
          <h3 className="card-title">New user</h3>
          <Table dataSource={dataSource} columns={columns} />
        </CustomCard>
      </div>
    </div>
  );
};

export default AdminDashboard;
