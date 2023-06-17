import React from "react";
import "./style.scss";
import { useGetSelectedQuery } from "../../../../store/services/accountApi";
import { useSelector } from "react-redux";
import { useState } from "react";
import CustomPagination from "../../../../components/CustomPagination/CustomPagination";
import MealItem from "../../../../components/MealItem/MealItem";
import Loading from "../../../../components/Loading/Loading";
import { useEffect } from "react";
const History = () => {
  const { accountId } = useSelector((state) => state.auth);
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading } = useGetSelectedQuery({
    id: accountId,
    pageNumber: pageNumber,
    pageSize: 6,
  });
  useEffect(() => {
    if (data) {
      setPageNumber(data.metaData.currentPage);
    }
  }, [data]);
  return (
    <>
      <span className="title raleway">Món ăn đã áp dụng</span>
      <div className="profile content-item">
        <p className="item-title">
          Những món ăn bạn đã áp dụng hoặc đã xem qua sẽ được hiện thị ở mục
          này.
        </p>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <CustomPagination
              onChange={(page) => setPageNumber(page)}
              currentPage={pageNumber}
              totalPage={data?.metaData.totalPage}
            />
            <div className="favourite-container">
              {data?.data.map((item, index) => {
                return <MealItem key={index} item={item} />;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default History;
