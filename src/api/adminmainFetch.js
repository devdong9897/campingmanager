import axios from "axios";

const getAdminMain = async () => {
  try {
    const res = await axios.get("/api/admin/manage/chart");
    const result = res.data;
    console.log("getadminchart 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// main 오늘의 할일
const getTodayData = async () => {
  try {
    const res = await axios.get("/api/admin/main/today");
    const result = res.data;
    console.log("today통게 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 현재 main 쇼핑몰 현황 쪽 안들어옴
const getShoppingMallData = async () => {
  try {
    const res = await axios.get("/api/admin/main");
    const result = res.data;
    console.log("shopping 통계 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { getAdminMain, getTodayData, getShoppingMallData };
