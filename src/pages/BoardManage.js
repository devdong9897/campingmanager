import React, { useEffect, useState } from "react";
import { Board } from "../css/boardmanage-style";
import { getTodayDate } from "../api/adminboardFetch";

const BoardManage = () => {
  // 공지사항이다를 클릭할때 수정할수있는 박스 생성
  const [isNoticeClicked, setIsNoticeClicked] = useState(false);
  const [isViewClicked, setIsViewClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isAnnouncementClicked, setIsAnnouncementClicked] = useState(false);

  // 게시판 목록 게시판 추가
  const [categoryAdd, setCategoryAdd] = useState(false);

  // 공지사항 클릭 핸들러
  const handleNoticeClick = () => {
    setIsNoticeClicked(!isNoticeClicked);
    setIsViewClicked(false);
    setIsDeleteClicked(false);
    setIsAnnouncementClicked(false);
    setCategoryAdd(false);
  };
  // 글보기 클릭 핸들러
  const handleViewClick = () => {
    setIsViewClicked(!isViewClicked);
    setIsDeleteClicked(false);
    setIsAnnouncementClicked(false);
    setCategoryAdd(false);
  };

  // 글삭제 클릭 핸들러
  const hanldeDeleteClick = () => {
    setIsDeleteClicked(!isDeleteClicked);
    setIsViewClicked(false);
    setIsAnnouncementClicked(false);
    setCategoryAdd(false);
  };

  // 공지글 클릭 핸들러
  const handleAnnouncementClick = () => {
    setIsAnnouncementClicked(!isAnnouncementClicked);
    setIsViewClicked(false);
    setIsDeleteClicked(false);
    setCategoryAdd(false);
  };

  // 카테고리 추가 클릭 핸들러
  const handleCategoryClick = () => {
    setCategoryAdd(!categoryAdd);
    setIsViewClicked(false);
    setIsDeleteClicked(false);
    setIsAnnouncementClicked(false);
  };

  return (
    <Board>
      <div className="board_inner">
        <h2>게시판 목록</h2>

        {isViewClicked && (
          <div className="notice_box">
            <h2>글보기</h2>
          </div>
        )}

        {isDeleteClicked && (
          <div className="notice_box">
            <h2>글삭제</h2>
          </div>
        )}

        {isAnnouncementClicked && (
          <div className="notice_box">
            <h2>공지글</h2>
          </div>
        )}

        {categoryAdd && (
          <div className="category_explanation">
            <p className="category_text">
              *게시판 카테고리를 추가하게 되면 입력한 값으로 카테고리가 추가
              됩니다.
            </p>
            <p className="test_title">추가될 카테고리 제목입력</p>
            <input type="text" className="category_input" />
            <div className="add_btn">
              <button>추가</button>
              <button>취소</button>
            </div>
          </div>
        )}
        <div className="bottom_btn">
          <button className="add_btn" onClick={handleCategoryClick}>
            게시판 추가
          </button>
        </div>
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
              공지사항입니다.
            </span>
          </li>
          <li>
            <span>권한</span>
            <span>관리자/비회원</span>
          </li>
          <li>
            <span>총 개수</span>
            <span>1/1</span>
          </li>
          <li>
            <span>표시여부</span>
            <span>표시</span>
          </li>
        </ul>
      </div>
    </Board>
  );
};

export default BoardManage;
