import React from "react";
import { useNavigate } from "react-router";
import { LoginMain } from "../css/login-style";

const Login = () => {
  const navigate = useNavigate();
  const handletoMain = () => {
    navigate("/main");
  };
  return (
    <LoginMain>
      <div className="login_inner">
        <div className="login_logo"></div>
        <h1 className="login_title">Camping Smore</h1>
        <form className="login_form">
          <span className="form_title">아이디</span>
          <input type="text" placeholder="아이디를 입력하세요" />
          <span className="form_title">비밀번호</span>
          <input type="password" placeholder="비밀번호를 입력하세요" />
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
        <button onClick={handletoMain} className="login_btn">
          로그인
        </button>
      </div>
    </LoginMain>
  );
};

export default Login;
