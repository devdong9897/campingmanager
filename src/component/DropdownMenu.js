// DropdownMenu.js
import React, { useState } from "react";
import BoardMenu from "./BoardMenu";
import PostsMenu from "./PostsMenu";
import {Dropdown} from "../css/boardmanage-style"

const DropdownMenu = () => {
  const [showMenus, setShowMenus] = useState(false);

  const toggleMenus = () => {
    setShowMenus(!showMenus);
  };

  return (
    <Dropdown>
      <div className="dropdown-menu">
        <span onClick={toggleMenus}>게시판</span>
        {showMenus && (
          <div className="menu-items">
            <BoardMenu />
            <PostsMenu />
          </div>
        )}
      </div>
    </Dropdown>
  );
};

export default DropdownMenu;
