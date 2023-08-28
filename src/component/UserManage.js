import React from "react";
import { useNavigate } from "react-router";

const Usermanage = () => {
  const navigate = useNavigate();
  const handleorder = () => {
    navigate("/main/OrderInquiry");
  };
  return (
    <div>
      <button onClick={handleorder}>주문관리</button>
    </div>
  );
};

export default Usermanage;
