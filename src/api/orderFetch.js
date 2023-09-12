import axios from "axios"; // 모든 유저 리스트 보기

// 전체 주문 조회 검색
const getOrderList = async sandData => {
  try {
    const res = await axios.get(
      `/api/admin/order${
        sandData.startDate ? `?startDate=${sandData.startDate}` : ""
      }${sandData.endDate ? `&endDate=${sandData.endDate}` : ""}${
        sandData.listBox ? `&listBox=${sandData.listBox}` : ""
      }${sandData.keyword ? `&keyword=${sandData.keyword}` : ""}`,
    );
    const result = res.data;
    console.log("전체 주문 조회 요청 완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 배송상태 변경
const postOrderState = async changeData => {
  try {
    const res = await axios.patch("/api/admin/order", changeData);
    const result = res.data;
    console.log("배송상태변경 완료?", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 환불내역 보기
const getOrderRefund = async (sendData) => {
  try{
    const res = await axios.get(`/api/admin/refund${
      sendData.startDate ? `?startDate=${sendData.startDate}` : ""
    }${sendData.endDate ? `&endDate=${sendData.endDate}` : ""}${
      sendData.listBox ? `&listBox=${sendData.listBox}` : ""
    }${sendData.keyword ? `&keyword=${sendData.keyword}` : ""}`)
    const result = res.data;
    console.log("환불내역 불러옴?",result);
    return result;
  }catch(err){
    console.log(err);
  }
  return [];
};


export { getOrderRefund, getOrderList, postOrderState };
