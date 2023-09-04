import React from "react";
import { BoardPosts } from "../css/boardmanage-style";

const PostsBoard = () => {
  return (
    <BoardPosts>
      <div className="posts_inner">
        <h2>게시물 검색</h2>
        <ul className="boardposts_data">
          <li>
            <span>작성일</span>
            <div className="data_columns">
              <button>오늘</button>
              <button>3일</button>
              <button>7일</button>
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
                <option>내용</option>
                <option>작성자</option>
                <option>상품명</option>
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
          <li>
            <span>총 환불액</span>
            <span className="list_bg">환불이다</span>
          </li>
          <li>
            <span>처리상태</span>
            <span className="list_bg">처리상태다</span>
          </li>
        </ul>
      </div>
    </BoardPosts>
  );
};

export default PostsBoard;
