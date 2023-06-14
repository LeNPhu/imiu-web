import React, { useState } from "react";
import "./styles.scss";
import { Divider } from "antd";

const MealItem = ({ item }) => {
  const [name, setName] = useState(item.name);
  const difficulty = [
    {
      id: 1,
      value: 1,
      name: "Dễ",
    },
    {
      id: 2,
      value: 2,
      name: "Trung bình",
    },
    {
      id: 3,
      value: 3,
      name: "Khó",
    },
  ];
  return (
    <div className="meal-item">
      <div className="meal-item__img">
        <img
          src="https://www.eatingwell.com/thmb/kaFmgjg8ydpS6bAq4Eli_WKJPL0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ChickenFajitaCasserole-RM-0119-2000-bb08653878fb4bd29ece7674ad8bf1ab.jpg"
          alt=""
        />
      </div>
      <div className="meal-item__content">
        <div className="name">
          <h4>
            {`${name?.length}` > 48 ? `${name.substring(0, 48)}...` : `${name}`}
          </h4>
        </div>
        <div className="meal-item__content__detail">
          <div className="meal-item__content__detail-item">
            <p>Thời gian</p>
            <h5 className="value">{item.cookingTime} phút</h5>
          </div>
          <Divider style={{ height: "100%" }} type="vertical" plain></Divider>
          <div className="meal-item__content__detail-item">
            <p>Độ khó</p>
            <h5 className="value">
              {difficulty.map((i) => {
                return <>{i.value == item.difficulty ? i.name : ""}</>;
              })}
            </h5>
          </div>
          <Divider style={{ height: "100%" }} type="vertical" plain></Divider>
          <div className="meal-item__content__detail-item">
            <p>Calories</p>
            <h5 className="value">{item.calories}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
