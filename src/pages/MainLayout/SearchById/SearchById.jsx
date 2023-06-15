import React from "react";
import { useParams } from "react-router";
import { useGetMenuQuery } from "../../../store/services/menuApi";
import Loading from "../../../components/Loading/Loading";
import { useSelector } from "react-redux";
import MealItem from "../../../components/MealItem/MealItem";
import "./styles.scss";

const SearchById = () => {
  const { id, name } = useParams();
  const tags = [{ id: id, name: name }];
  const { accountId } = useSelector((state) => state.auth);
  console.log("id: ", id, "name: ", name);
  const { data, isLoading } = useGetMenuQuery({
    customerId: accountId ? accountId : "",
    name: "",
    difficulty: [],
    tags: tags,
    pageNumber: 1,
    pageSize: 20,
  });
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="search">
          <div className="search-content">
            <h2>Tìm kiếm những món {name}</h2>
            <div className="search-content-list">
              {data?.data[0]?.data.map((item, index) => {
                return <MealItem key={index} item={item} />;
              })}
              {data?.data[0]?.data.map((item, index) => {
                return <MealItem key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchById;
