import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const Home = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 15%;
  height: 100vh;
  background: #3e3e3e;
  font-weight: 700;
  .header_logo {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #fff;
    background-image: url("${path}/images/header_logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
  }
  .home_categories {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    margin-top: 25%;
    li {
      font-size: 30px;
      margin-top: 20px;
      transition: color 0.3s;
      cursor: pointer;
      color: #fff;
      &:hover {
        color: #00c2ff;
      }
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #00c2ff;
        }
      }
      .lnb {
        display: none;
        margin-top: 10px;
        gap: 5px;
        height: 0px;
        flex-direction: column;
        opacity: 0;
        transition:
          transform 0.3s,
          opacity 0.3s,
          height 0.3s;
        li {
          width: 100%;
          margin: 0;
          font-size: 20px;
          a {
            display: block;
            width: 100%;
            text-align: center;
          }
        }
        &.active {
          display: block;
          height: auto;
          opacity: 1;
        }
      }

      .ordermanage_list {
        background-color: none;
      }
    }
    p {
      margin-top: 50%;
      font-size: 13px;
      color: #fff;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
  .account_func {
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    position: absolute;
    transform: translate(-50%, 0%);
    left: 50%;
    bottom: 50px;
    .logout_btn {
      display: flex;
      gap: 10px;
      border: none;
      background: none;
      font-family: "NanumSquare";
      font-weight: bold;
      font-size: 18px;
      color: #fff;
    }
  }
`;
