import styled from "@emotion/styled";

export const Home = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 15%;
  height: 100vh;
  background: #3e3e3e;
  font-weight: 700;
  .home_categories {
    list-style: none;
    text-align: center;
    margin-top: 100%;
    li {
      font-size: 30px;
      margin-top: 20px;
      transition: color 0.3s;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #00c2ff;
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
`;
