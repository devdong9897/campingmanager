import axios from "axios";

const getTodayDate = async () => {
  try {
    const res = await axios.get("/api/admin/board/today");
    const result = res.data;
    console.log("categorytoday 요청완료");
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getThreeData = async () => {
  try {
    const res = await axios.get("/api/admin/board/three");
    const result = res.data;
    console.log("3일 데이터 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getSevenDayData = async () => {
  try {
    const res = await axios.get("/api/admin/board/week");
    const result = res.data;
    console.log("7일 데이터 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// const postBasket = async iitem => {
//   try {
//     const res = await axios.post(`/api/cart`, {
//       iitem: iitem,
//       quantity: 1,
//     });
//     console.log("postbasket 실행완료");
//   } catch (error) {
//     console.log(error);
//   }
// };
export { getTodayDate, getThreeData, getSevenDayData };
