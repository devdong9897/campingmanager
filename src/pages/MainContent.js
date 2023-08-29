import React from "react";
import { ContentMain } from "../css/maincontent-style";
import MainChart from "../component/MainChart";

const MainCotent = () => {
  return (
    <ContentMain>
      <div className="content_inner">
        <h2>오늘의할일</h2>
        <ul className="day_data">
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
      </div>
    </ContentMain>
  );
};

export default MainCotent;
