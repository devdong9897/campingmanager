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
    .today_data {
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
      }
    }

    .maincontent_colnum_title {
      width: 100%;
      height: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      background: #f4f5f8;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border: 1px solid #828282;
      }
    }
    .miancontent_data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: auto;

      li {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        div {
          border: 1px solid #828282;
        }
        .list_column_date {
          span {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            height: 100%;
          }
        }
        .list_column {
          span {
            display: flex;
            flex-direction: column;
            width: 100%;
            p {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              text-align: right;
              padding-right: 5px;
            }
          }
        }
      }
    }

    .shoppingmall {
      margin-top: 50px;
    }

    .main_chart {
      margin-top: 100px;
      width: 100%;
      height: 500px;
      .pie_wrapper {
        width: 100%;
        height: 100%;
        background: #f4f5f8;
        .pie_list {
          display: flex;
          justify-content: center;
          width: 85%;
          height: 100%;
          margin-left: 100px;

          li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 33.3%;
            height: 100%;
            padding: 50px;
            p {
              font-weight: 700;
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
`;
