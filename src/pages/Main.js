import React from "react";
import Header from "../component/Header";
import { Route, Routes } from "react-router";
import MainContent from "./MainContent";
import ClientManage from "./ClientManage";
import UserManage from "./UserManage";
import ProductManage from "./ProductManage";
import BoardManage from "./BoardManage";
import Reservation from "./Reservation";
import { MainWrap } from "../css/main-style";

const Main = () => {
  return (
    <MainWrap>
      <Header />
      <div className="contents_area">
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/clientmanage" element={<ClientManage />}></Route>
          <Route path="/usermanage" element={<UserManage />}></Route>
          <Route path="/productmanage" element={<ProductManage />}></Route>
          <Route path="/boardmanage" element={<BoardManage />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
        </Routes>
      </div>
    </MainWrap>
  );
};

export default Main;
