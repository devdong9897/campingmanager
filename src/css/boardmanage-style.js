import styled from "@emotion/styled";

export const Board = styled.div`
  width: 100%;
  height: auto;
  .board_inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    h2 {
      margin-bottom: 10px;
    }
    .notice_box {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 300px;
      margin-bottom: 20px;
      background: #fafafd;
      border: 1px solid #e5e5e5;
      .first_box {
        margin-left: 50px;
        flex: 1;
        p {
          margin: 10px 0px 0px 10px;
        }
        input {
          width: 60%;
          margin: 0px 0px 0px 10px;
          padding: 5px 0px 5px 15px;
          border-radius: 15px;
          border: 1px solid #828282;
        }
        .announcement {
          margin-top: 30px;
        }
        .announcement_input {
          width: 80%;
          height: 60%;
          padding: 5px 0px 100px 15px;
        }
      }
      .second_box {
        p {
          margin: 10px 10px 0px 10px;
        }
        button {
          padding: 5px 50px;
          background-color: white;
          text-align: center;
          &:hover {
            background-color: #9de8ff;
          }
        }
      }
      .chack_btn {
        margin-top: 50px;
        margin-right: 50px;
        .bulletin_chack {
          margin-top: 40px;
        }
      }
      .save {
        margin-top: 70px;
        background: green;
        border-radius: 10px;
      }
    }
    .mainboard_data {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 80px;
      box-shadow: 0px 0px 0px 2px red inset;
      .first_chart {
        width: 30%;
      }
      li {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0cm 0px 0px 2px blue inset;
        span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          text-align: center;
          background: #fafafd;
          box-shadow: 0cm 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
          &:nth-child(3) {
            height: 85%;
            background: #fff;
          }
        }
        .notice {
          text-decoration: underline;
          cursor: pointer;
          &:hover {
            color: #828282;
          }
        }
      }
      .board_btn {
        display: flex;
        flex-direction: row;
        gap: 10px;

        button {
          width: 70px;
          height: 25px;
          margin-top: 6px;
          border-radius: 5px;
          border: 1px solid black;
        }
      }
    }

    .bottom_btn {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 40px;
      background: #fff;
      box-shadow: 0cm 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
      button {
        margin-top: 10px;
      }
      .delete_btn {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid black;
      }
      .add_btn {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid black;
      }
    }
  }
`;

export const Dropdown = styled.div`
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #00c2ff;
  }
`;

export const SubDrop = styled.div`
  font-size: 20px;
`;

export const BoardPosts = styled.div`
  width: 100%;
  height: auto;
  .posts_inner {
    width: 100%;
    height: 100%;
    h2 {
      margin-bottom: 10px;
    }
    .boardposts_data {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      li {
        display: grid;
        grid-template-columns: 10% 90%;
        height: 70px;
        background: #fff;
        border: 1px solid #828282;
        span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          background: #e5e5e5;
          border-right: 1px solid #000;
        }
        .data_columns {
          display: flex;
          gap: 3px;
          align-items: center;
          padding-left: 20px;
          button {
            padding: 5px 12px;
            border: 1px solid #828282;
            border-radius: 10px;
          }
          input {
            padding: 5px;
          }
          select {
            padding: 5px;
          }
        }
      }
    }
    .posts_buttom {
      width: 100%;
      height: 50px;
      border: 1px solid #828282;
      button {
        width: 100px;
        margin-top: 10px;
        margin-left: 50%;
        padding: 5px;
        border-radius: 5px;
        &:hover {
          background: #9ae7ff;
        }
      }
    }
    .posts_list {
      margin-top: 10%;
    }
    .postslist_data {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 80px;
      box-shadow: 0px 0px 0px 2px red inset;
      li {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0cm 0px 0px 2px blue inset;
        span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 70%;
          text-align: center;
          background: #fafafd;
          box-shadow: 0cm 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
        }
        .list_bg {
          background: #fff;
        }
      }
    }
  }
`;
