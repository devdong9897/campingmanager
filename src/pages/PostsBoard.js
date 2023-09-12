import React, { useEffect, useState } from "react";
import { BoardPosts } from "../css/boardmanage-style";
import {
  getBoardListData,
  getMonthData,
  getSevenDayData,
  getThreeData,
  getTodayDate,
  getTotalListData,
} from "../api/adminboardFetch";

const PostsBoard = () => {
  // 게시물 리스트
  const [noticeState, setNoticeState] = useState(true);
  const [nomalBoardData, setNomalBoardData] = useState([]);
  // 공지리스트 데이터
  const [boardListData, setBoardListData] = useState([]);

  // 게시판 옵션 선택
  const [selectedOption, setSelectedOption] = useState("분류");
  // 게시물 오늘 날짜

  // const parsedDataFunc = data => {
  //   const koreanData = data.map(item => {
  //     if (item.icategory === 0) {
  //       return { ...item, icategory: "공지사항" };
  //     } else if (item.i)
  //   });
  // };
  const toTalListData = async () => {
    try {
      const data = await getTotalListData();
      console.log("전체 게시물리스트", data);
    } catch (err) {
      console.log(err);
    }
  };

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

  const filterOption = item => {
    return selectedOption === "분류" || selectedOption === item.icategory;
  };

  const filterOptionChange = e => {
    const selectedValue = e.target.Value;
    setSelectedOption(selectedValue);
  };

  useEffect(() => {
    // boardTodayData();
    userNoticeList();
    toTalListData();
  }, []);

  return (
    <BoardPosts>
      ``
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
              <select onChange={filterOptionChange} value={selectedOption}>
                <option value="분류">분류</option>
                <option value="공지">공지</option>
                <option value="자유">자유</option>
                <option value="중고거래">중고거래</option>
                <option value="질문">질문</option>
                <option value="지역">지역</option>
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
                  {nomalBoardData.filter(filterOption).map((item, index) => (
                    <div className="list_pack" key={index}>
                      <li>{item.icategory}</li>
                      <li>{item.categoryName}</li>
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
