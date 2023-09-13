import React, { useEffect, useState } from "react";
import { BoardPosts } from "../css/boardmanage-style";
import {
  getBoardListData,
  getCategoryBoardDate,
  getCategoryData,
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

  const handleSearchValueData = e => {
    console.log(e);
  };

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

  const boardAllData = async () => {
    try {
      const data = await getTotalListData();
      setNomalBoardData(data);
      console.log("전체리스트?", data);
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

  // ===================== 상세검색
  // 카테고리 조회 선택
  const [categorySearch, setCategorySearch] = useState([]);
  // 게시판 옵션 선택
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectTitle, setSelectTitle] = useState("");
  const [titleTxt, setTitleTxt] = useState("");

  // 상세 분류
  const getCategory = async () => {
    try {
      const data = await getCategoryData();
      console.log("상세분류 목록 ", data);
      setCategorySearch(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  const boardCategoryData = async _cate => {
    console.log(_cate);
    setSelectedOption(_cate);
    // console.log(e);
    // setSelectedOption(e);
    // console.log("여기니?");
    // try {
    //   const data = await getCategoryBoardDate(selectedOption);
    //   console.log("리스트만 들어오냐", data.list);
    //   setNomalBoardData(data.list);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  // 시작 날짜
  const handleStartDate = e => {
    // console.log(e.target.value);
    setStartDate(e.target.value);
  };
  // 마지막 날짜
  const handleEndDate = e => {
    // console.log(e.target.value);
    setEndDate(e.target.value);
  };
  // 타이틀
  const handleChangeTitle = _title => {
    // console.log("handleChangeTitle : ", _title);
    setSelectTitle(_title);
  };
  // 타이틀 내용
  const handleChangeTitleTxt = _title => {
    // console.log("handleChangeTitleTxt : ", _title);
    setTitleTxt(_title);
  };
  // 카테고리 조회
  const boardCategory = async () => {
    // const sendData = {
    //   startDate: startDate,
    //   endDate: endDate,
    //   listBox: searchNum,
    //   keyword: searchValue,
    // };
    // console.log(sendData);
    // try {
    //   const data = await getCategoryData();
    //   console.log("카테고리조회 데이터 들어오냐?", data);
    //   setCategorySearch(data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  // 상세 검색 버튼
  const handleSearchBoard = async () => {
    try {
      let getSArr = [];
  
      if (selectedOption !== "" && selectedOption !== "0") {
        getSArr.push(`icategory=${selectedOption}`);
      }
      if (startDate !== "") {
        getSArr.push(`startDate=${startDate}`);
      }
      if (endDate !== "") {
        getSArr.push(`endDate=${endDate}`);
      }
      if (titleTxt !== "") {
        getSArr.push(`title=${titleTxt}`);
      }
  
      let getStxt = "";
      if (getSArr.length > 0) {
        getStxt = "?" + getSArr.join("&");
      }
  
      console.log("검색 조건:", getStxt);
  
      const result = await getTotalListData(getStxt);
      console.log("검색 결과:", result);
    
      setNomalBoardData(result);
    } catch (err) {
      console.log(err);
    }
  };
  

  useEffect(() => {
    userNoticeList();
    boardCategory();
    toTalListData();
  }, []);

  return (
    <BoardPosts>
      <div className="posts_inner">
        <h2>게시물 검색</h2>
        <ul className="boardposts_data">
          <li>
            <span>작성일</span>
            <div className="data_columns">
              <button onClick={boardAllData}>전체</button>
              <button onClick={boardTodayData}>오늘</button>
              <button onClick={handleThreeData}>3일</button>
              <button onClick={handleSevenData}>7일</button>
              <button onClick={handleMonthData}>1개월</button>
            </div>
          </li>
          <li>
            <span>상세 검색</span>
            <div className="data_columns">
              <select
                value={selectedOption}
                onChange={e => boardCategoryData(e.target.value)}
              >
                <option value={0}>분류</option>
                {categorySearch.map((category, index) => (
                  <option key={index} value={category.icategory}>
                    {category.name}
                  </option>
                ))}
              </select>

              <input type="date" onChange={e => handleStartDate(e)}></input>
              <input type="date" onChange={e => handleEndDate(e)}></input>

              <select
                name="title"
                onChange={e => handleChangeTitle(e.target.value)}
              >
                <option>제목</option>
              </select>
              <input
                type="text"
                onChange={e => handleChangeTitleTxt(e.target.value)}
              />

              <button onClick={handleSearchBoard}>검색</button>
            </div>
          </li>
        </ul>

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
