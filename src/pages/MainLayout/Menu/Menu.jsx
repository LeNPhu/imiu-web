import React from "react";
import MealItem from "../../../components/MealItem/MealItem";
import {
  useGetMenuQuery,
  useGetTagsQuery,
} from "../../../store/services/menuApi";
import { useSelector } from "react-redux";
import "./styles.scss";
import Loading from "../../../components/Loading/Loading";
import banner from "../../../assets/images/imiu-menu.png";
import { Checkbox, Col, Input } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import CustomPagination from "../../../components/CustomPagination/CustomPagination";
const { Search } = Input;
const Menu = () => {
  const navigate = useNavigate();
  const difficulty = [
    {
      id: 1,
      value: 1,
      name: "Tập sự 🐱",
    },
    {
      id: 2,
      value: 2,
      name: "Có kinh nghiệm 🤠",
    },
    {
      id: 3,
      value: 3,
      name: "Chuyên gia 😎",
    },
  ];
  const { accountId } = useSelector((state) => state.auth);
  const { data: dataTag } = useGetTagsQuery();
  const [searchString, setSearchString] = useState("");
  const [tags, setTags] = useState();
  const [dif, setDif] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading } = useGetMenuQuery({
    customerId: accountId ? accountId : "",
    name: searchString,
    difficulty: dif,
    tags: tags ? tags : [],
    pageNumber: pageNumber,
    pageSize: 3,
  });
  useEffect(() => {
    if (dataTag) {
      setTags(dataTag.data);
    }
  }, [dataTag]);
  useEffect(() => {
    if (data) {
      setPageNumber(data.metaData.currentPage);
    }
  }, [data])
  const onSearch = (value) => {
    setSearchString(value);
  };
  const onChange = (checkedValues) => {
    setTags(checkedValues);
  };
  const onChangeDifficulty = (checkedValues) => {
    setDif(checkedValues);
  };

  const handleViewAll = (id, name) => {
    navigate(`/search-by-id/${id}/${name}`);
  };

  return (
    <div className="menu">
      <div className="menu-banner">
        <img src={banner} alt="" />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="menu-content">
            <h1>Chúng tôi liệt kê những món ăn phù hợp với cá nhân của bạn.</h1>
            <div className="menu-content__container">
              <div className="menu-content__filter">
                <h2>Tìm kiếm món ăn</h2>
                <Search
                  placeholder="Bạn muốn ăn gì ? 😛"
                  allowClear
                  onSearch={onSearch}
                  size="large"
                />
                <h3>Tìm kiếm theo độ khó</h3>
                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                  onChange={onChangeDifficulty}
                  className="checkbox-list"
                  defaultValue={difficulty.map((item) => item.id)}
                >
                  {difficulty.map((item, index) => {
                    return (
                      <Checkbox
                        key={index}
                        value={item.id}
                        className="checkbox-item"
                      >
                        {item.name}
                      </Checkbox>
                    );
                  })}
                </Checkbox.Group>
                <h3>Tìm kiếm theo loại</h3>
                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                  onChange={onChange}
                  className="checkbox-list"
                  defaultValue={dataTag?.data.map((item) => item)}
                >
                  {dataTag?.data.map((item, index) => {
                    return (
                      <Checkbox
                        key={index}
                        value={item}
                        className="checkbox-item"
                      >
                        {item.name}
                      </Checkbox>
                    );
                  })}
                </Checkbox.Group>
              </div>
              <div className="menu-content__wrapper">
                <CustomPagination
                  onChange={(page) => setPageNumber(page)}
                  currentPage={pageNumber}
                  totalPage={data?.metaData.totalPage}
                />
                {data?.data.length == 0 ? <p style={{textAlign: "center"}}>Không có dữ liệu.</p> : ""}
                {data?.data.map((item, index) => {
                  return (
                    <div key={index} className="menu-content__item">
                      <div className="menu-content__item__header">
                        <h3>Món {item.tag}</h3>
                        <p
                          className="view-all"
                          onClick={() => handleViewAll(item.tagId, item.tag)}
                        >
                          Xem tất cả
                        </p>
                      </div>
                      <div className="menu-content__item__list">
                        {item.data.map((item) => {
                          return <MealItem key={item.id} item={item} />;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
