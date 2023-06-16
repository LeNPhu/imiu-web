import React from "react";
import "./style.scss";
import { useGetSelectedQuery } from "../../../../store/services/accountApi";
import { useSelector } from "react-redux";
import { useState } from "react";
import CustomPagination from "../../../../components/CustomPagination/CustomPagination";
import MealItem from "../../../../components/MealItem/MealItem";
const History = () => {
  const { accountId } = useSelector((state) => state.auth);
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading } = useGetSelectedQuery({
    id: accountId,
    pageNumber: 1,
    pageSize: 6,
  });
  console.log("data", data);
  return (
    <>
      <span className="title raleway">Món ăn đã áp dụng</span>
      <div className="profile content-item">
        <p className="item-title">
          Những món ăn bạn đã áp dụng hoặc đã xem qua sẽ được hiện thị ở mục
          này.
        </p>
        <CustomPagination
          // onChange={() => setPageNumber()}
          currentPage={pageNumber}
          totalPage={data?.metaData.totalPage}
        />
        <div className="favourite-container">
          {data?.data.map((item, index) => {
            return <MealItem key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default History;
