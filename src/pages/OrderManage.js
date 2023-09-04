import React from "react";
import OrderInquiry from "../component/OrderInquiry";
import OrderRefund from "../component/OrderRefund";
import { Route, Routes } from "react-router";

const OrderManage = () => {
  return (
    <Routes>
      <Route path="/orderinquiry" element={<OrderInquiry/>}></Route>
      <Route path="/orderrefund" element={<OrderRefund/>}></Route>
    </Routes>
  );
};

export default OrderManage;