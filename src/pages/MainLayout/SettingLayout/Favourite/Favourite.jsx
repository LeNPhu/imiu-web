import React from "react";
import "./style.scss";
const Favourite = () => {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg",
      name: "Cơm tấm",
      description: "day la com tam day la com tam",
      time: "50 min",
      hallOfFame: true,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg",
      name: "Cơm tấm",
      description: "day la com tam day la com tam",
      time: "50 min",
      hallOfFame: false,
    },
  ];
  return (
    <>
      <span className="title raleway">Món ăn yêu thích</span>
      <div className="profile content-item">
        <p className="item-title">
          Những món ăn bạn đã đánh dấu<span className="green"> yêu thích </span>
          sẽ được hiện thị ở mục này
        </p>
        <div className="favourite-container">
          {data.map((item) => {
            return (
              <div className="favourite-item">
                <img src={item.image} />

                <div className="favourite-content">
                  {item.hallOfFame ? (
                    <div className="hof">HALL OF FAME</div>
                  ) : null}
                  <span className="bold">{item.name}</span>
                  <p>{item.description}</p>
                  <div className="divider" />
                  <p className="bold">{item.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favourite;
