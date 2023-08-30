import React from "react";
import { ContentMain } from "../css/maincontent-style";
import MainChart from "../component/MainChart";

const MainCotent = () => {
  return (
    <ContentMain>
      <div className="content_inner">
        <h2>오늘의할일</h2>
        <ul className="miancontent_data">
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
