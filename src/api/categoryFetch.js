import axios from "axios";

// 카테고리 리스트 보기
const getCategoryList = async () => {
  try {
    const res = await axios.get("/api/admin/item/category");
    const result = res.data;
    console.log("아이템 카테고리 리스트 요청 완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 카테고리 추가

// 카테고리 업데이트

// 카테고리 수정

// 카테고리 디테일
export const getCategoryDetail = async () => {
  try {
    const res = await axios.get(`/api/admin/item/category`);
    const result = res.data;
    console.log("카테고리 디테일 요청");
    return result;
  } catch (err) {
    console.log(err);
  }
  return {};
};

// 카테고리 삭제
// const deleteCategoryItem = async iitem => {
//     try {
//         const res = await axios.delete(`/api/admin/item/category/${iitem}`)
//         console.log("아이템 카테고리 삭제 요청")
//     }catch(err) {
//         console.log(err)
//     }
// }
export default getCategoryList;
