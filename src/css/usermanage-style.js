import styled from "@emotion/styled";

export const UserWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 50px;
  padding-bottom: 150px;
  /* background-color: lightgray; */
  .user_inner {
    width: auto;
    height: auto;
    overflow: hidden;
    .user_list_top {
      width: 100%;
      height: auto;
      background-color: white;
      border: 1px solid #eee;
      ul {
        width: 100%;
        height: auto;
        overflow: hidden;
        box-shadow: 2px 2px 2px #999;
        li {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          width: 100%;
          height: auto;
          border: 1px solid #eee;
          text-align: center;
          span {
            float: left;
            width: 100%;
            height: 30px;
            line-height: 30px;
            input {
              border: none;
              text-indent: 10px;
            }
          }
          span:nth-of-type(odd) {
            background-color: lightgray;
          }
        }
        li:first-child span:nth-of-type(2) input,
        li:nth-of-type(2),
        li:nth-of-type(3) {
          width: 100%;
          grid-template-columns: 1fr 3fr;
          input {
            float: left;
            text-indent: 10px;
            height: 100%;
          }
        }
        li:nth-of-type(2) span:nth-of-type(2) input,
        li:nth-of-type(3) span input {
          width: 100%;
        }
        li:first-child span:nth-of-type(4) input:last-child {
          margin-left: 10px;
        }
      }
    }
    .user_top_button {
      margin: 15px;
      text-align: center;
      button {
        padding: 5px 20px;
        background-color: lightgray;
        border: none;
        margin-bottom: 100px;
      }
    }
    .user_list_bottom {
      .user_list_bottom_inner {
        width: 100%;
        height: auto;
        background-color: white;
        box-shadow: 2px 2px 2px #999;
        ul {
          width: 100%;
          height: auto;
          overflow: hidden;
          li {
            float: left;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            width: 100%;
            height: auto;
            text-align: center;
            span {
              float: left;
              width: 100%;
              height: auto;
              line-height: 30px;
              border: 1px solid #bbb;
              border-right: none;
              border-bottom: none;
            }
            span:last-child {
              border-right: 1px solid #000;
            }
          }
          li:first-child {
            background-color: lightgray;
          }
          li:last-child {
            border-bottom: 1px solid #000;
          }
        }
        .user_bottom_button {
          margin: 15px 0;
          text-align: center;
          button {
            padding: 5px 20px;
            background-color: lightgray;
            border: none;
          }
        }
      }
    }
  }
`;
