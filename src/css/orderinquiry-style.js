import styled from "@emotion/styled";

export const OrderInquiryWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 50px;
  padding-bottom: 150px;
  /* background-color: lightgray; */
  .order_inquiry_inner {
    width: auto;
    height: auto;
    overflow: hidden;
    padding: 10px;
    .order_inquiry_top {
      width: 100%;
      height: auto;
      background-color: white;
      box-shadow: 2px 2px 2px #999;
      border: 1px solid #eee;
      ul {
        width: 100%;
        height: auto;
        overflow: hidden;
        li {
          float: left;
          display: grid;
          grid-template-columns: 1fr 4fr;
          width: 100%;
          height: auto;
          border: 1px solid #ccc;
          line-height: 30px;
          button {
            padding: 1px 5px;
            margin-right: 8px;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-top: 6px;
          }
          button:hover {
            color: blue;
            border: 1px solid blue;
          }
        }
        li:first-child span:first-child,
        li:nth-child(2) span:first-child {
          background-color: lightgray;
          text-align: center;
        }
        li:first-child span:nth-of-type(2),
        li:nth-child(2) span:nth-of-type(2) {
          margin-left: 20px;
          .searchbox {
            margin-left: 10px;
          }
        }
      }
      div {
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
        button {
          padding: 3px 15px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
        }
      }
    }
    .order_inquiry_bottom {
      width: 100%;
      height: auto;
      box-shadow: 2px 2px 2px #999;
      margin-top: 150px;
      li {
        display: flex;
        width: 100%;
        height: auto;
        line-height: 30px;
        text-align: center;
        .list {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        }
        span {
          border: 1px solid #bbb;
          width: 100%;
          border-right: none;
        }
        .changeOrder {
          cursor: pointer;
          &:hover {
            background: #bbb;
          }
        }
        .orerChange_box {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          height: 30px;
          span {
            border: none;
            width: auto;
          }
          .change_btn {
            padding: 0px 10px;
          }
        }
      }
      .empty_box {
        width: 100%;
        padding: 20px 0px;
        text-align: center;
      }
      .parents_list {
        display: flex;
        flex-direction: column;
      }
      li:first-child span {
        background-color: lightgray;
      }
    }
  }
`;
