import React from "react";
import Header from "../component/Header";
import { Route, Routes } from "react-router";
import MainContent from "./MainContent";
import ClientManage from "./ClientManage";
import OrderManage from "./OrderManage";
import ProductManage from "./ProductManage";
import BoardManage from "./BoardManage";
import Reservation from "./Reservation";

const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/clientmanage" element={<ClientManage />}></Route>
        <Route path="/ordermanage" element={<OrderManage />}></Route>
        <Route path="/productmanage" element={<ProductManage />}></Route>
        <Route path="/boardmanage" element={<BoardManage />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
