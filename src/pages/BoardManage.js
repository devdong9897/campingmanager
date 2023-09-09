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
  };
  // 글보기 클릭 핸들러
  const handleViewClick = () => {
    setIsViewClicked(!isViewClicked);
    setIsNoticeClicked(false);
    setIsDeleteClicked(false);
    setIsAnnouncementClicked(false);
    setCategoryAdd(false);
  };

  // 글삭제 클릭 핸들러
  const hanldeDeleteClick = () => {
    setIsDeleteClicked(!isDeleteClicked);
    setIsViewClicked(false);
    setIsNoticeClicked(false);
    setIsAnnouncementClicked(false);
    setCategoryAdd(false);
  };

  // 공지글 클릭 핸들러
  const handleAnnouncementClick = () => {
    setIsAnnouncementClicked(!isAnnouncementClicked);
    setIsViewClicked(false);
    setIsDeleteClicked(false);
    setIsNoticeClicked(false);
    setCategoryAdd(false);
  };

  // 카테고리 추가 클릭 핸들러
  const handleCategoryClick = () => {
    setCategoryAdd(!categoryAdd);
    setIsViewClicked(false);
    setIsDeleteClicked(false);
    setIsNoticeClicked(false);
    setIsAnnouncementClicked(false);
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
            <div className="second_box">
              <div className="chack_btn">
                <p>게시글 표시여부</p>
                <button>표시</button>
                <button>표시안함</button>
                <p className="bulletin_chack">게시글 표시여부</p>
                <button>표시</button>
                <button>표시안함</button>
                <button>표시안함</button>
              </div>
              <button className="save">저장</button>
            </div>
          </div>
        )}

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
          <button className="delete_btn">삭제</button>
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
              <button onClick={handleViewClick}>글보기</button>
              <button onClick={hanldeDeleteClick}>글삭제</button>
              <button onClick={handleAnnouncementClick}>공지글</button>
            </span>
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
