import axios from "axios";
import { cookies, getCookie, setCookie } from "./cookie";
import { useNavigate } from "react-router-dom";

// export const client = axios.create({
//   baseURL: "http://192.168.0.144:5005",
//   timeout: 1000,
//   headers: {
//     "Content-Type": "application/json;charset=UTF-8",
//   },
// });

// Request 처리
axios.interceptors.request.use(
  config => {
    // cookie를 활용 한 경우
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => console.log(error),
);

// 쿠키 set 하기
export const fetchLogin = async (email, pw) => {
  try {
    const res = await axios.post(`/api/admin/oauth/authorize`, {
      uid: email,
      upw: pw,
    });
    console.log("데이터받아옴", res.data);
    const result = await res.data;
    setCookie("refreshToken", result.refreshToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
    setCookie("accessToken", result.accessToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
  } catch (error) {
    console.log(error);

    // alert("아이디 비밀번호가 일치하지 않습니다");
  }
};

export const deleteCookie = () => {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
};
