import React from "react";
import { Link } from "react-router-dom";
import { SubDrop } from "../css/boardmanage-style";

const BoardMenu = () => {
  return (
    <SubDrop>
      <div className="menu-dropdown">
        <Link to="/admin/boardmanage">게시판 관리</Link>
      </div>
    </SubDrop>
  );
};

export default BoardMenu;
