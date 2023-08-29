import React from "react";
import { useNavigate } from "react-router";
import { LoginMain } from "../css/login-style";

const Login = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/main");
  };
  return (
    <LoginMain>
      <div className="login_inner">
        <div className="login_logo"></div>
        <h1 className="login_title">Camping Smore</h1>
        <form className="login_form">
          <div>아이디</div>
          <input type="text" placeholder="아이디를 입력하세요" />
          <div className="login_pas">비밀번호</div>
          <input type="password" placeholder="비밀번호를 입력하세요" />
          <p className="login_membership">
            아직 회원이 아니신가요?<span className="membership">회원가입</span>
            <span className="login_find">아이디/비밀번호 찾기</span>
          </p>
        </form>
        <button onClick={handle} className="login_btn">
          로그인
        </button>
      </div>
    </LoginMain>
  );
};

export default Login;
