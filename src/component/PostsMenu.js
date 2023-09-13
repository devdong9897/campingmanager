import React from "react";
import { Link } from "react-router-dom";
import { SubDrop } from "../css/boardmanage-style";

const Posts = () => {
  return (
    <SubDrop>
      <div className="menu-dropdown">
        <Link to="/admin/postsboard">게시물 관리</Link>
      </div>
    </SubDrop>
  );
};

export default Posts;
