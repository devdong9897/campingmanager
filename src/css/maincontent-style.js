import styled from "@emotion/styled";

export const ContentMain = styled.div`
  width: 100%;
  height: auto;
  .content_inner {
    width: 100%;
    height: 100%;
    h2 {
      margin-bottom: 10px;
    }
    .day_data {
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
          p {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            text-align: center;
            height: 50%;
            &:last-child {
              border: none;
            }
          }
          &:nth-child(2) {
            height: 30%;
            background: #fff;
          }
        }
      }
    }
    .test {
      margin-top: 100px;
      width: 100%;
      height: 500px;
      .pie_wrapper {
        width: 100%;
        height: 100%;
        background: gainsboro;
        .pie_list {
          display: flex;
          width: 100%;
          height: 100%;
          li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 33.3%;
            height: 100%;
            padding: 50px;
          }
        }
      }
    }
  }
`;
