import styled from "@emotion/styled";

export const Board = styled.div`
  width: 100%;
  height: auto;
  .board_inner {
    width: 100%;
    height: 100%;
    h2 {
      margin-bottom: 10px;
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
          height: 70%;
          text-align: center;
          background: #fafafd;
          box-shadow: 0cm 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
          &:nth-child(2) {
            height: 60%;
            background: #fff;
          }
        }
      }
      .board_btn {
        display: flex;
        flex-direction: row;
        gap: 10px;
        
        button {
          width: 50px;
          height: 20px;
          margin-top: 6px;
        }
      }
    }
  }
`;
