import React, { useState } from "react";
import { Board } from "../css/boardmanage-style";

const BoardManage = () => {
  // 공지사항이다를 클릭할때 수정할수있는 박스 생성
  const [isNoticeClicked, setIsNoticeClicked] = useState(false);

  // 공지사항 클릭 핸들러
  const handleNoticeClick = () => {
    setIsNoticeClicked(!isNoticeClicked);
  };
  return (
    <Board>
      <div className="board_inner">
        <h2>게시판 목록</h2>
        {isNoticeClicked && (
          <div className="notice_box">
            <div className="first_box">
              <p>게시판 제목</p>
              <input type="text" />
              <p className="announcement">게시판 안내글</p>
              <input type="text" className="announcement_input" />
            </div>
          </div>
        )}
        <ul className="mainboard_data">
          <li className="first_chart">
            <span>
              <input type="checkbox" />
            </span>
            <span>
              <input type="checkbox" />
            </span>
          </li>
          <li>
            <span>제목</span>
            <span
              className={`notice ${isNoticeClicked ? "active" : ""}`}
              onClick={handleNoticeClick}
            >
              공지사항이다잉
            </span>
          </li>
          <li>
            <span>권한</span>
            <span>관리자/비회원</span>
          </li>
          <li>
            <span>총 개수</span>
            <span>0/1</span>
          </li>
          <li>
            <span>관리</span>
            <span className="board_btn">
              <button>글보기</button>
              <button>글삭제</button>
              <button>공지글</button>
            </span>
          </li>
          <li>
            <span>표시여부</span>
            <span>표시</span>
          </li>
        </ul>
        <div className="bottom_btn">
          <button className="delete_btn">삭제</button>
          <button className="add_btn">게시판 추가</button>
        </div>
      </div>
    </Board>
  );
};

export default BoardManage;
