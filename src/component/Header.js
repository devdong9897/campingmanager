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
  // 로그아웃 클릭시 처리
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
          <Link to="/admin">홈</Link>
        </li>
        <li>
          <Link to="/admin/usermanage">유저관리</Link>
        </li>
        <li onClick={() => toggleMenu(0)}>
          주문관리
          <ul className={`lnb ${lnbIndex === 0 ? "active" : ""}`}>
            <li>
              <Link to="/admin/ordermanage/orderinquiry">전체 주문조회</Link>
            </li>
            <li>
              <Link to="/admin/ordermanage/orderrefund">환불관리</Link>
            </li>
          </ul>
        </li>
        <li onClick={() => toggleMenu(1)}>
          상품관리
          <ul className={`lnb ${lnbIndex === 1 ? "active" : ""}`}>
            <li>
              <Link to="/admin/productmanage/categoryadmin">카테고리 관리</Link>
            </li>
            {/* <li>
              <Link to="/main/productmanage/orderregistration">
                카테고리 등록
              </Link>
            </li> */}
            <li>
              <Link to="/admin/productmanage/itemmanage">상품 관리</Link>
            </li>
            {/* <li>
              <Link to="/main/productmanage/itemstockmanage">
                상품 재고 관리
              </Link>
            </li> */}
            {/* <li>
              <Link to="/main/productmanage/itemlist">상품 목록</Link>
            </li> */}
            <li>
              <Link to="/admin/productmanage/itemlist">추천아이템 관리</Link>
            </li>
          </ul>
        </li>
        <li onClick={() => toggleMenu(2)}>
          게시판
          <ul className={`lnb ${lnbIndex === 2 ? "active" : ""}`}>
            <li>
              <Link to="/admin/boardmanage">게시판 관리</Link>
            </li>
            <li>
              <Link to="/admin/postsboard">게시물 관리</Link>
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
