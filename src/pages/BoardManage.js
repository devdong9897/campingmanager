import React from "react";
import { Board } from "../css/boardmanage-style";

const BoardManage = () => {
  return (
    <Board>
      <div className="board_inner">
        <h2>게시판 목록</h2>
        <ul className="mainboard_data">
          <li>
            <span>배송준비중/배송보류중</span>
            <span>0</span>
          </li>
          <li>
            <span>배송대기</span>
            <span>0</span>
          </li>
        </ul>
      </div>
    </Board>
  );
};

export default BoardManage;
