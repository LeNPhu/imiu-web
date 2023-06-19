import React, { useState } from "react";
import "./styles.scss";
import { Button, Divider } from "antd";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
  useAddFavouriteMutation,
  useMealSelectionsMutation,
} from "../../store/services/accountApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MealItem = ({ item }) => {
  const navigate = useNavigate();
  const { accountId } = useSelector((state) => state.auth);

  const [name, setName] = useState(item.name);
  const [isFavourite, setIsFavourite] = useState(item.isFavourite);
  const [mealSelections, { isSuccess }] = useMealSelectionsMutation();
  const [addFavourite, { isSuccess: isSuccessF }] = useAddFavouriteMutation();

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
  useEffect(() => {
    if (isSuccess) {
      toast.success("Đã thêm món vào thực đơn hôm nay");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isSuccessF) {
      setIsFavourite(!isFavourite);
      if (!isFavourite) {
        toast.success("Đã thêm vào món yêu thích");
      } else {
        toast.success("Đã xóa khỏi danh sách yêu thích")
      }
    }
  }, [isSuccessF]);
  const handleMealSelection = async (e) => {
    e.stopPropagation();
    if (accountId) {
      await mealSelections({
        id: accountId,
        mealId: item.id,
      });
    } else {
      toast.error("Bạn phải đăng nhập để thực hiện chức năng này");
    }
  };
  const handleMealFavourite = async (e) => {
    e.stopPropagation();

    if (accountId) {
      await addFavourite({
        id: accountId,
        mealId: item.id,
      });
    } else {
      toast.error("Bạn phải đăng nhập để thực hiện chức năng này");
    }
  };
  const handleViewDetail = (id) => {
    navigate(`/meal-detail/${id}`);
  };
  return (
    <div className="meal-item" onClick={() => handleViewDetail(item.id)}>
      <div className="meal-item__img">
        <img src={item.imageUrl} alt="" />
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
                return (
                  <div key={i.id}>
                    {i.value == item.difficulty ? i.name : ""}
                  </div>
                );
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
      <div className="select-button">
        <Button
          type="primary"
          style={{ fontWeight: "bold" }}
          onClick={handleMealSelection}
        >
          Chọn
        </Button>
      </div>
      <div className="mark-button">
        <Button
          onClick={handleMealFavourite}
          icon={isFavourite ? <FaStar /> : <FaRegStar />}
          style={{ color: "green" }}
        />
      </div>
    </div>
  );
};

export default MealItem;
