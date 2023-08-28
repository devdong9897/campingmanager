import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleuser = () => {
    navigate("/main/usermanage");
  };
  return (
    <div>
      <button onClick={handleuser}>유저관리</button>
      <ul>
        <li>
          <Link to="/main">메인</Link>
        </li>
        <li>
          <Link to="/main/ordermanage">주문</Link>
        </li>
        <li>
          <Link to="/main/clientmanage">고객</Link>
        </li>
        <li>
          <Link to="/main/productmanage">상품</Link>
        </li>
        <li>
          <Link to="/main/boardmanage">게시판</Link>
        </li>
        <li>
          <Link to="/main/reservation">예약</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
