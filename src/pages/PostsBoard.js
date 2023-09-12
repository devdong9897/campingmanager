import React, { useEffect, useState } from "react";
import { BoardPosts } from "../css/boardmanage-style";
import {
  getBoardListData,
  getMonthData,
  getSevenDayData,
  getThreeData,
  getTodayDate,
} from "../api/adminboardFetch";
import { text } from "@fortawesome/fontawesome-svg-core";

const PostsBoard = () => {
  // 게시물 리스트
  const [noticeState, setNoticeState] = useState(true);
  const [nomalBoardData, setNomalBoardData] = useState([]);
  const [boardListData, setBoardListData] = useState([]);

  // 게시물 오늘 날짜

  // const parsedDataFunc = data => {
  //   const koreanData = data.map(item => {
  //     if (item.icategory === 0) {
  //       return { ...item, icategory: "공지사항" };
  //     } else if (item.i)
  //   });
  // };

  const boardTodayData = async () => {
    try {
      const data = await getTodayDate();
      console.log("게시물 오늘날짜 데이터 들어오냐고?", data);
      setNomalBoardData(data);
      setNoticeState(false);
    } catch (err) {
      console.log(err);
    }
  };

  // 게시물 3일 날짜
  const handleThreeData = async () => {
    try {
      const data = await getThreeData();
      console.log("3일 머시기", data);
      setNomalBoardData(data);
      setNoticeState(false);
    } catch (err) {
      console.log(err);
    }
  };

  // 게시물 7일 날짜
  const handleSevenData = async () => {
    try {
      const data = await getSevenDayData();
      console.log("7일 머시기", data);
      setNomalBoardData(data);
      setNoticeState(false);
    } catch (err) {
      console.log(err);
    }
  };

  // 게시물 한달 날짜
  const handleMonthData = async () => {
    try {
      const data = await getMonthData();
      console.log("한달 데이터 들어오냐?", data);
      setNomalBoardData(data);
    } catch (err) {
      console.log(err);
    }
  };

  // 게시판 공지 리스트
  const userNoticeList = async () => {
    try {
      const data = await getBoardListData();
      console.log("공지리스트데이터 들어오냐?", data);
      setBoardListData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchBoard = async () => {
    try {
      const searchData = await getTodayDate();
      console.log("검색 결과 데이터:", searchData);
      setNomalBoardData(searchData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // boardTodayData();
    userNoticeList();
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
              <button onClick={handleMonthData}>1개월</button>
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
          <button onClick={handleSearchBoard}>검색</button>
        </div>
        <h2 className="posts_list">게시물 리스트</h2>
        {noticeState ? (
          <>
            <ul className="postslist_data">
              <ul className="list_title">
                <li>카테고리</li>
                <li>내용</li>
                <li>생성일자</li>
                <li>조회수</li>
              </ul>
              {boardListData ? (
                <>
                  {boardListData.map((item, index) => (
                    <div className="list_pack" key={index}>
                      <li>{item.icategory}</li>
                      <li>
                        <p dangerouslySetInnerHTML={{ __html: item.ctnt }}></p>
                      </li>
                      <li>{item.createdat}</li>
                      <li>{item.boardView}</li>
                    </div>
                  ))}
                </>
              ) : (
                "데이터없음"
              )}
            </ul>
          </>
        ) : (
          <>
            <ul className="nomallist_data">
              <ul className="nomallist_title">
                <li>게시글PK</li>
                <li>카테고리</li>
                <li>제목</li>
                <li>작성자</li>
                <li>작성일</li>
                <li>조회</li>
              </ul>
              {nomalBoardData ? (
              <>
                {nomalBoardData.map((item, index) => (
                  <div className="list_pack" key={index}>
                    <li>{item.icategory}</li>
                    <li>
                      카테고리(작성)
                    </li>
                    <li>{item.title}</li>
                    <li>{item.name}</li> 
                    <li>{item.createdat}</li> 
                    <li>{item.boardview}</li> 
                  </div>
                ))}
              </>
            ) : (
              ""
            )}
            </ul>
          </>
        )}
      </div>
    </BoardPosts>
  );
};

export default PostsBoard;
