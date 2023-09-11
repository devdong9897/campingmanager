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

// export const getOrderRefund = async () => {
//   try {
//     const params = {
//       startDate: "20230906",
//       endDate: "20230907",
//     };
//     const res = await axios.get(`/api/admin/refund`, { params: params });
//     console.log("환불관리 요청 데이터");
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
//   return [];
// };
export { getOrderList, postOrderState };
