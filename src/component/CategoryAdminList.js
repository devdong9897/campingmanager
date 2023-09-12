import React, { useEffect, useState } from "react";
import { categoryItemUpdate } from "../api/categoryFetch";

const CategoryAdminList = ({ item, toggleEditMode, categoryListDelete }) => {
  // 카테고리명 수정 여부
  const [toggleEdit, setToggleEdit] = useState(false);
  const handleToggleEdit = _bool => {
    setToggleEdit(_bool);
  };
  // 카테고리명 변수
  const [categoryName, setCategoryName] = useState("");
  const changeItemName = async () => {
    // console.log("보낼 데이터 iitemCategory : ", item.iitemCategory);
    // console.log("보낼 데이터 name : ", categoryName);
    // console.log("보낼 데이터 status : ", itemStatusSet);
    const sendData = {
      iitemCategory: item.iitemCategory,
      name: categoryName,
      status: itemStatusSet,
    };
    await categoryItemUpdate(sendData);
    handleToggleEdit(false);
  };

  useEffect(() => {
    setCategoryName(item.name);
  }, []);

  // 판매중 1, 판매중지 2
  const [itemStatusSet, setItemStatusSet] = useState(0);
  const changeItemStatus = async _num => {
    // console.log("보낼 데이터 iitemCategory : ", item.iitemCategory);
    // console.log("보낼 데이터 name : ", item.name);
    // console.log("보낼 데이터 status : ", _num);
    const sendData = {
      iitemCategory: item.iitemCategory,
      name: item.name,
      status: _num,
    };
    await categoryItemUpdate(sendData);
    setItemStatusSet(_num);
  };
  useEffect(() => {
    setItemStatusSet(item.status);
  }, []);

  // items 배열을 iitemCategory값으로 오름차순 정렬
  // item.sort((a,b) => a.iitemCategory - b.iitemCategory)

  return (
    <li>
      <span>{item.iitemCategory}</span>
      <span>
        {/* 편집 모드 */}
        {/* {toggleEdit ? <input type="text" value={item.name}></input> : item.name} */}
        {/* 편집 모드 */}
        {toggleEdit ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              value={categoryName}
              style={{ maxWidth: "60%" }}
              onChange={e => setCategoryName(e.target.value)}
            />
            <button onClick={changeItemName}>수정완료</button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {categoryName}
            <button onClick={() => handleToggleEdit(true)}>수정</button>
          </div>
        )}
      </span>
      <span>
        <input
          type="radio"
          value={"판매중"}
          checked={itemStatusSet === 1}
          onChange={() => changeItemStatus(1)}
        />{" "}
        판매중
        <input
          type="radio"
          value={"판매중지"}
          checked={itemStatusSet === 2}
          onChange={() => changeItemStatus(2)}
        />{" "}
        판매중지
        {/* {item.status === 1 ? (
          <button onClick={toggleEditMode}>판매중지</button>
        ) : (
          <button onClick={toggleEditMode}>판매중</button>
        )} */}
      </span>
      <span>
        <button onClick={() => categoryListDelete(item.iitemCategory)}>
          카테고리 삭제
        </button>
      </span>
    </li>
  );
};

export default CategoryAdminList;
