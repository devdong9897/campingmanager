import React from "react";
import OrderInquiry from "../component/OrderInquiry";
import OrderRefund from "../component/OrderRefund";

const OrderManage = ({selectedRoute}) => {
  return (
    <>
      <OrderInquiry/>
      <OrderRefund/>
    </>
  );
};

export default OrderManage;