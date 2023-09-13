import axios from "axios";

// 아이템 상세이미지 업로드
const ItemDetailImage = async (iitem, picUrl) => {
  try {
    const res = await axios.post("/api/admin/item/detail-pic", {
      iitem,
      picUrl,
    });
    console.log("아이템 상세이미지 요청 완료");
    return res.data;
  } catch (err) {
    console.log(err);
  }
  return {};
};

// 아이템 추가
const itemAdd = async requestData => {
    try{
        // const requestData = {
        //     iitemCategory: 0, 
        //     name: "string",   
        //     pic: "string",    
        //     price: 0,         
        //     info: "string",   
        //     stock: 0,         
        //     status: 0,        
        //     picUrl: ["string"]
        // };
        const res = await axios.post(`/api/admin/item`,requestData)
        const data = res.data
        console.log("아이템 추가 요청 완료")
        return data;
    }catch(err){
        console.log(err)
    }
}

// 아이템 수정
const itemEdit = async itemData => {
  try {
    // http://192.168.0.144:5005/api/admin/item/bestitem
    const res = await axios.put(`/api/admin/item/bestitem`, itemData);
    console.log("아이템 수정 요청 완료");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 아이템 삭제
const itemDelete = async idx => {
  try {
    // http://192.168.0.144:5005/api/admin/item/bestitem?ibestItem=22222
    const res = await axios.delete(`/api/admin/item/bestitem?ibestItem=${idx}`);
    console.log("아이템 삭제 요청", res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 추천아이템 리스트 보기
const getRecommendItemList = async () => {
  try {
    const res = await axios.get("/api/admin/item/bestitem");
    const result = res.data;
    console.log("추천아이템 요청", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 추천 아이템 추가
const recommendItemAdd = async (iitem, monthLike) => {
  const postRecoData = {
    iitem: iitem,
    monthLike: monthLike,
  };
  try {
    const res = await axios.post("/api/admin/item/bestitem", postRecoData);
    console.log("추천아이템 추가 요청");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
// 아이템 개별 검색
const getItemSearch = async () => {
  try {
    const res = await axios.get("/api/admin/item/search")
    const result = res.data;
    console.log("아이템 검색 요청 완료",result)
    return result
  }catch(err) {
    console.log(err)
  }
}
// 아이템 검색 리스트
const getItemSearchList = async () => {
  try {
    const res = await axios.get("/api/admin/item/search");
    const result = res.data;
    console.log("아이템 검색리스트 요청 완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return {};
};

export {
  ItemDetailImage,
  itemAdd,
  itemEdit,
  itemDelete,
  getItemSearchList,
  getRecommendItemList,
  recommendItemAdd,
  getItemSearch
};
