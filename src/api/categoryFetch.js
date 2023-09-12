import axios from "axios";

// 카테고리 리스트 보기
const getCategoryList = async () => {
  try {
    const res = await axios.get("/api/admin/item/category");
    const result = res.data;
    // console.log("============== 아이템 카테고리 리스트 요청 완료");
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 카테고리 추가
const categoryAdd = async categoryName => {
  const postData = {
    name: categoryName,
  };
  try {
    const res = await axios.post(`/api/admin/item/category`, postData);
    // console.log("카테고리 추가 요청 완료");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 카테고리 업데이트
const categoryUpdate = async () => {
  try {
    const categoryId = 1;
    const updatedData = {
      name: "새로운 카테고리",
    };
    const res = await axios.put(
      `/api/admin/item/category/${categoryId}`,
      updatedData,
    );
  } catch (err) {
    console.log(err);
  }
};
// 개별 아이템 업데이트
const categoryItemUpdate = async _data => {
  console.log("categoryItemUpdate : ", _data);
  try {
    const res = await axios.put(`/api/admin/item/category`, _data);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 카테고리 삭제
const deleteCategoryItem = async iitemCategory => {
  try {
    const res = await axios.delete(
      `/api/admin/item/category?iitemCategory=${iitemCategory}`,
    );
    // console.log("아이템 카테고리 삭제 요청", res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 카테고리 디테일

const getCategoryDetail = async () => {
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


export {
  getCategoryList,
  getCategoryDetail,
  categoryUpdate,
  categoryAdd,
  deleteCategoryItem,
  categoryItemUpdate,
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

