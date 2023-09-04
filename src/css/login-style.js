import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const LoginMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login_inner {
    width: 425px;
    margin-bottom: 125px;
    .login_logo {
      width: 100%;
      height: 200px;
      background-image: url("${path}/images/logo3.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .login_title {
      text-align: center;
      font-size: 40px;
      color: #00c2ff;
    }
    .login_form {
      display: flex;
      flex-direction: column;
      .form_title {
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: 600;
        width: 100%;
        color: black;
      }
      input {
        padding: 8px 15px;
        border-radius: 10px;
        border: none;
        background: #cbe6f7;
        font-size: 20px;
      }
      .login_pas {
        margin-top: 30px;
      }
    }
    .help_account {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 15px 0px;
      gap: 5px;
      span {
        display: flex;
        justify-content: center;
      }
      .find_account {
        display: flex;
        gap: 5%;
        justify-content: center;
      }
    }
    .login_btn {
      width: 100%;
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
