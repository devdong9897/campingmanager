import axios from "axios";
import { redirectDocument } from "react-router";

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
    console.log("3일 데이터 요청완료");
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
    console.log("7일 데이터 요청완료");
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getMonthData = async () => {
  try {
    const res = await axios.get("/api/admin/board/month");
    const result = res.data;
    console.log("한달 데이터 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getBoardListData = async () => {
  try {
    const res = await axios.get("/api/admin/board/notice-list");
    const result = res.data;
    console.log("공지 리스트 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getTotalListData = async _query => {
  // http://192.168.0.144:5005/api/admin/board/admin-board?startDate=2023-09-14&endDate=2023-09-14&icategory=5&title=%EC%95%88%EB%85%95
  try {
    const res = await axios.get(`/api/admin/board/admin-board${_query}`);
    const result = res.data;
    console.log("게시글 전체리스트 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getCategoryData = async () => {
  try {
    const res = await axios.get(`/api/admin/board/category`);
    const result = res.data;
    console.log("카테고리 조회 요청완료");
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getCategoryBoardDate = async selectedOption => {
  try {
    const res = await axios.get(
      `/api/community/category-list?icategory=${parseInt(
        selectedOption,
      )}&page=1&row=15`,
    );
    const result = res.data;
    console.log("검색한거 다들어옴?", res);
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
export {
  getTodayDate,
  getThreeData,
  getSevenDayData,
  getMonthData,
  getBoardListData,
  getTotalListData,
  getCategoryData,
  getCategoryBoardDate,
};