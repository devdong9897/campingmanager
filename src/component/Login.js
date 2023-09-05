import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LoginMain } from "../css/login-style";
import { fetchLogin } from "../api/client";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  // const handletoMain = () => {
  //   navigate("/main");
  // };

  const handleLogin = async e => {
    console.log(id);
    console.log(pass);
    if (id === "" || pass === "") {
      alert("아이디와 비밀번호를 입력해주세요!!");
    } else if (e.key === "enter") {
      alert("adawd");
    }
    try {
      e.preventDefault();
      const login = await fetchLogin(id, pass);
      setId("");
      setPass("");
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/main");
    }
  };
  return (
    <LoginMain>
      <div className="login_inner">
        <div className="login_logo"></div>
        <h1 className="login_title">Camping Smore</h1>
        <form className="login_form">
          <span className="form_title">아이디</span>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            onChange={e => setId(e.target.value)}
          />
          <span className="form_title">비밀번호</span>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={e => setPass(e.target.value)}
          />
          <div className="help_account">
            <span>
              괸리자 계정 생성으로 관리자 계정을 생성하실 수 있습니다.
            </span>
            <span>관리자 계정 생성</span>
            <div className="find_account">
              <span>아이디 찾기</span>
              <span>비밀번호 찾기</span>
            </div>
          </div>
        </form>
        <button
          // onClick={handletoMain}
          className="login_btn"
          onClick={handleLogin}
        >
          로그인
        </button>
      </div>
    </LoginMain>
  );
};

export default Login;
