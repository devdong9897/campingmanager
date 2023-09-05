import React, { useEffect, useState } from "react";
import { ContentMain } from "../css/maincontent-style";
import MainChart from "../component/MainChart";
import axios from "axios";
import { getAdminMain } from "../api/adminFetch";

const MainCotent = () => {
  // 유저데이터목록
  const [chartdata, setChartData] = useState([]);
  // 유저데이터 수
  const [chartlength, setchartlength] = useState("");
  // 남자꺼
  const [manList, setManList] = useState("");
  // 여자꺼
  const [womanList, setWomanList] = useState("");

  // 차트데이터 불러오기
  const UserChartDate = async () => {
    try {
      const data = await getAdminMain();
      console.log("데이터 넘어옴?", data);
      console.log("데이터 갯수?", data.length);
      setChartData(data);
      setchartlength(data.length);
      resultPie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const resultPie = data => {
    const AllList = data.length;
    const manData = data.filter(item => item.gender === 0);
    const woman = data.filter(item => item.gender === 1);
    const manDataLength = manData.length;
    const womanDataLenght = woman.length;
    console.log("전체데이터 갯수", AllList);
    console.log("남자데이터 갯수", manDataLength);
    console.log("여자데이터 갯수", womanDataLenght);
    const manDataResult = manDataLength / AllList;
    const womanDateResult = womanDataLenght / AllList;
    console.log(manDataResult);
    console.log(womanDateResult);
  };

  useEffect(() => {
    UserChartDate();
  }, []);
  return (
    <ContentMain>
      <div className="content_inner">
        <h2>오늘의 할일</h2>
        <ul className="miancontent_data">
          <li>
            <span>오늘 방문자</span>
            <span>0</span>
          </li>
          <li>
            <span>배송준비중/배송보류중</span>
            <span>0</span>
          </li>
          <li>
            <span>배송대기</span>
            <span>0</span>
          </li>
          <li>
            <span>배송중</span>
            <span>0</span>
          </li>
          <li>
            <span>
              <p>취소</p>
              <p>신청/처리중</p>
            </span>
            <span>0</span>
          </li>
          <li>
            <span>
              <p>교환</p>
              <p>신청/처리중</p>
            </span>
            <span>0</span>
          </li>
          <li>
            <span>
              <p>반품</p>
              <p>신청/처리중</p>
            </span>
            <span>0</span>
          </li>
          <li>
            <span>환불전</span>
            <span>0</span>
          </li>
          <li>
            <span>게시물 관리</span>
            <span>0</span>
          </li>
        </ul>
        <div className="test">
          <MainChart />
        </div>
        <h2 className="shoppingmall">쇼핑몰 현황</h2>
        <ul className="miancontent_data">
          <li>
            <span>날짜</span>
            <span>08월 02일</span>
          </li>
          <li>
            <span>주문</span>
            <span>0원</span>
          </li>
          <li>
            <span>결제</span>
            <span>0원</span>
          </li>
          <li>
            <span>환불(취소/반품)</span>
            <span>0원</span>
          </li>
        </ul>
      </div>
    </ContentMain>
  );
};

export default MainCotent;
