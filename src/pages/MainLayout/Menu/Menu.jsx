import React from "react";
import MealItem from "../../../components/MealItem/MealItem";
import { useGetMenuQuery } from "../../../store/services/menuApi";
import { useSelector } from "react-redux";
import "./styles.scss";
import Loading from "../../../components/Loading/Loading";

const Menu = () => {
  const { accountId } = useSelector((state) => state.auth);
  console.log("accountid", accountId);
  const { data, isLoading } = useGetMenuQuery({
    customerId: accountId ? accountId : "",
    name: "",
    difficulty: "",
    tags: [],
    pageNumber: 1,
    pageSize: 4,
  });

  console.log("data", data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="menu">
          <h1>Chúng tôi liệt kê những món ăn phù hợp với cá nhân của bạn.</h1>
          <div className="menu-content">
            {data?.data.map((item, index) => {
              return (
                <div key={index} className="menu-content__item">
                  <h2>{item.tag}</h2>
                  <div className="menu-content__item__list">
                    {item.data.map((item, index) =>{
                      return (
                        <MealItem key={index} item={item}/>
                      )
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
