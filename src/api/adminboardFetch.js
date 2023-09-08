import axios from "axios";

const postAddCategory = async () => {
  try {
    const res = await axios.post("/api/community/insCategory");
    const result = res.data;
    console.log("postAddCategory 완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
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
