import React, { useEffect, useState } from "react";

const ItemEditList = ({ item, handleDelete, handleBestItemChange }) => {
  // console.log(item);

  // 날짜 출력
  const [dayData, setDayData] = useState("");
  useEffect(() => {
    // const day = item.createdAt.split("T");
    const day = item.monthLike;
    setDayData(day);
  }, []);

  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <li>
      <span>{item.iitem}</span>
      <span>{item.itemNm}</span>
      <span>
        <img src={item.pic} alt="" width={100} />
      </span>
      <span>{item.price}</span>
      <span>{dayData}</span>
      <span>
        <button onClick={() => handleBestItemChange(item.ibestItem)}>수정</button>
        <button onClick={() => handleDelete(item.ibestItem)}>삭제</button>
      </span>
    </li>
  );
};

export default ItemEditList;
