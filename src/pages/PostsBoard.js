import React, { useEffect, useState } from "react";
import { BoardPosts } from "../css/boardmanage-style";
import {
  getSevenDayData,
  getThreeData,
  getTodayDate,
} from "../api/adminboardFetch";

const PostsBoard = () => {
  // 게시물관리 날짜
  const [boardData, setBoardData] = useState([]);

  // 게시물 오늘 날짜
  const boardTodayData = async () => {
    try {
      const data = await getTodayDate();
      console.log("게시물 오늘날짜 데이터 들어오냐고?", data);
      setBoardData(data);
    } catch (err) {
      console.log(err);
    }
  };

  // 게시물 3일 날짜
  const handleThreeData = async () => {
    try {
      const data = await getThreeData();
      console.log("3일 머시기", data);
      setBoardData(data);
    } catch (err) {
      console.log(err);
    }
  };

  // 게시물 7일 날짜
  const handleSevenData = async () => {
    try {
      const data = await getSevenDayData();
      console.log("7일 머시기", data);
      setBoardData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    boardTodayData();
  }, []);
  return (
    <BoardPosts>
      <div className="posts_inner">
        <h2>게시물 검색</h2>
        <ul className="boardposts_data">
          <li>
            <span>작성일</span>
            <div className="data_columns">
              <button onClick={boardTodayData}>오늘</button>
              <button onClick={handleThreeData}>3일</button>
              <button onClick={handleSevenData}>7일</button>
              <button>1개월</button>
              <input type="date"></input>
              <input type="date"></input>
            </div>
          </li>
          <li>
            <span>게시판선택</span>
            <div className="data_columns">
              <select>
                <option>분류</option>
                <option>공지</option>
                <option>자유</option>
                <option>중고거래</option>
                <option>질문</option>
                <option>지역</option>
              </select>
            </div>
          </li>
          <li>
            <span>게시글찾기</span>
            <div className="data_columns">
              <select>
                <option>제목</option>
                <option>작성자</option>
              </select>
              <input type="text" />
            </div>
          </li>
        </ul>
        <div className="posts_buttom">
          <button>검색</button>
        </div>
        <h2 className="posts_list">게시물 리스트</h2>

        <ul className="postslist_data">
          <li>
            <span>카테고리</span>
            <span className="list_bg">공지</span>
          </li>
          <li>
            <span>제목</span>
            <span className="list_bg">공지사항이다</span>
          </li>
          <li>
            <span>작성자</span>
            <span className="list_bg">작성자다</span>
          </li>
          <li>
            <span>작성일</span>
            <span className="list_bg">작성일이다</span>
          </li>
          <li>
            <span>조회</span>
            <span className="list_bg">조회다</span>
          </li>
        </ul>
      </div>
    </BoardPosts>
  );
};

export default PostsBoard;
