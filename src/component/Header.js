import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Home } from "../css/header-style";
import DropdownMenu from "../component/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const [lnb, isLnb] = useState(false);
  const [lnbIndex, setLnbIndex] = useState("");

  const toggleMenu = index => {
    isLnb(!lnb);
    setLnbIndex(index);
  };
  // const handleuser = () => {
  //   navigate("/main/ordermanage");
  // };
  // 로그아웃 클릭시 처리하는 함수
  const handleLogout = () => {
    // 로그인 페이지로 이동
    navigate("/");
  };
  // // 중첩 라우트 선택 상태를 관리할 useState
  // const [selectedRoute, setSelectedRoute] = useState("");
  // const handleRouteChange = event => {
  //   setSelectedRoute(event.target.value);
  //   navigate(`/main/ordermanage/${event.target.value}`);
  //   navigate(`/main/productmanage/${event.target.value}`);
  // };

  const handleOrderDrop = () => {
    isLnb(true);
  };
  return (
    <Home>
      <div className="header_logo"></div>
      <ul className="home_categories">
        <li>
          <Link to="/main">홈</Link>
        </li>
        <li>
          <Link to="/main/usermanage">유저관리</Link>
        </li>
        <li onClick={() => toggleMenu(0)}>
          주문관리
          <ul className={`lnb ${lnbIndex === 0 ? "active" : ""}`}>
            <li>
              <Link to="/main/ordermanage/orderinquiry">전체 주문조회</Link>
            </li>
            <li>
              <Link to="/main/ordermanage/orderrefund">환불관리</Link>
            </li>
          </ul>
        </li>
        <li onClick={() => toggleMenu(1)}>
          상품관리
          <ul className={`lnb ${lnbIndex === 1 ? "active" : ""}`}>
            <li>
              <Link to="/main/productmanage/categoryadmin">카테고리 관리</Link>
            </li>
            <li>
              <Link to="/main/productmanage/orderregistration">
                카테고리 등록
              </Link>
            </li>
            <li>
              <Link to="/main/productmanage/itemmanage">상품관리</Link>
            </li>
            <li>
              <Link to="/main/productmanage/itemstockmanage">
                상품 재고 관리
              </Link>
            </li>
            <li>
              <Link to="/main/productmanage/itemlist">
                상품 목록
              </Link>
            </li>
          </ul>
        </li>
        <li onClick={() => toggleMenu(2)}>
          게시판
          <ul className={`lnb ${lnbIndex === 2 ? "active" : ""}`}>
            <li>
              <Link to="/main/boardmanage">게시판 관리</Link>
            </li>
            <li>
              <Link to="/main/postsboard">게시물 관리</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="account_func">
        <button className="logout_btn">
          <FontAwesomeIcon icon={faRightFromBracket} />
          로그아웃
        </button>
      </div>
    </Home>
  );
};

export default Header;
