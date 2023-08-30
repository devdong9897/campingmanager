import styled from "@emotion/styled";

export const Home = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 15%;
  height: 100vh;
  background: #3e3e3e;
  font-weight: 700;
  .userbutton {
  }
  .home_categories {
    list-style: none;
    text-align: center;
    margin-top: 100%;
  }
  .home_categories li {
    font-size: 30px;
    margin-top: 20px;
    transition: color 0.3s;
  }
  .home_categories li a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #00C2FF;
    }
  }

`;
