import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const LoginMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  .login_inner {
    margin: 50px auto;
    .login_logo {
      width: 100%;
      height: 200px;
      background-image: url("${path}/images/logo3.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 50%;
    }
    .login_title {
      text-align: center;
      font-size: 40px;
      color: #00c2ff;
    }
    .login_form {
      div {
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: 600;
        width: 100%;
        color: black;
      }
      input {
        padding-top: 15px;
        padding-right: 35%;
        padding-bottom: 15px;
        font-size: 20px;
      }
      .login_pas {
        margin-top: 30px;
      }
    }
    .login_membership {
      font-size: 13px;
      .membership {
        font-weight: 700;
        margin-left: 5px;
        color: #00c2ff;
        cursor: pointer;
      }
      .login_find {
        margin-left: 50px;
        cursor: pointer;
      }
    }
    .login_btn {
      width: 380px;
      height: 60px;
      margin-top: 20px;
      font-size: 25px;
      font-weight: 700;
      color: #fff;  
      background: #2297e1;
      border-radius: 15px;
      border: none;
      cursor: pointer;
    }
  }
`;
