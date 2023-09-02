import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Home } from "../css/header-style";
import DropdownMenu from "../component/DropdownMenu";

const Header = () => {
  const navigate = useNavigate();
  // const handleuser = () => {
  //   navigate("/main/ordermanage");
  // };
  // 로그아웃 클릭시 처리하는 함수
  const handleLogout = () => {
    // 로그인 페이지로 이동
    navigate("/");
  };
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
        </li>
        <li>
          <Link to="/main/productmanage">아이템관리</Link>
        </li>
        <li>
          <DropdownMenu />
        </li>
        <p onClick={handleLogout}>로그아웃</p>
      </ul>
    </Home>
  );
};

export default Header;
