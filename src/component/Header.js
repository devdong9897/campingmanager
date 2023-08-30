import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Home } from "../css/header-style";

const Header = () => {
  const navigate = useNavigate();
  const handleuser = () => {
    navigate("/main/usermanage");
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
          <Link to="/main/clientmanage">고객</Link>
        </li>
        <li>
          <Link to="/main/productmanage">아이템관리</Link>
        </li>
        <li>
          <Link to="/main/boardmanage">게시판</Link>
        </li>
        <li>
          <Link to="/main/reservation">예약</Link>
        </li>
      </ul>
    </Home>
  );
};

export default Header;
