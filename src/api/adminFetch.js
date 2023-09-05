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

export {getAdminMain}