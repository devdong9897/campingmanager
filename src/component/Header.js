import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Home } from "../css/header-style";

const Header = () => {
  const navigate = useNavigate();
  // const handleuser = () => {
  //   navigate("/main/ordermanage");
  // };
  // 로그아웃 클릭시 처리하는 함수
  const handleLogout = () => {
    // 로그인 페이지로 이동
    navigate("/login");
  };
  // 중첩 라우트 선택 상태를 관리할 useState
  const [selectedRoute, setSelectedRoute] = useState("")
  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
    navigate(`/main/ordermanage/${event.target.value}`)
    navigate(`/main/productmanage/${event.target.value}`)
  }
  return (
    <Home>
      <ul className="home_categories">
        <li>
          <Link to="/main">홈</Link>
        </li>
        <li>
          <Link to="/main/usermanage">유저관리</Link>
        </li>
        <li>
          <Link to="/main/ordermanage">주문관리</Link>
            <select value={selectedRoute} onChange={handleRouteChange}>
            <option value="orderinquiry">전체 주문조회</option>
            <option value="orderrefund">환불관리</option>
          </select>
        </li>
        <li>
          <Link to="/main/productmanage">아이템관리</Link>
          <select value={selectedRoute} onChange={handleRouteChange}>
            <option value="categoryadmin">카테고리 관리</option>
            <option value="orderregistration">아이템 등록</option>
            <option value="itemmanage">아이템 관리</option>
            <option value="itemstockmanage">아이템 재고 관리</option>
            <option value="itemlist">아이템 목록</option>
          </select>
        </li>
        <li>
          <Link to="/main/boardmanage">게시판관리</Link>
        </li>
        {/* <li>
          <Link to="/main/reservation">예약</Link>
        </li> */}
        <p onClick={handleLogout}>로그아웃</p>
      </ul>
    </Home>
  );
};

export default Header;
