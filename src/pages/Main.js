import React from "react";
import Header from "../component/Header";
import { Route, Routes } from "react-router";
import MainContent from "./MainContent";
import OrderManage from "./OrderManage";
import UserManage from "./UserManage";
import ProductManage from "./ProductManage";
import BoardManage from "./BoardManage";
import PostsBoard from "./PostsBoard";
import Reservation from "./Reservation";
import { MainWrap } from "../css/main-style";

const Main = () => {
  return (
    <MainWrap>
      <Header />
      <div className="contents_area">
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/ordermanage" element={<OrderManage />}></Route>
          <Route path="/usermanage" element={<UserManage />}></Route>
          <Route path="/productmanage" element={<ProductManage />}></Route>
          <Route path="/boardmanage" element={<BoardManage />}></Route>
          <Route path="/postsboard" element={<PostsBoard />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
        </Routes>
      </div>
    </MainWrap>
  );
};

export default Main;
