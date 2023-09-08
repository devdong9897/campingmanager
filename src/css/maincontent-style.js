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
        box-shadow: 0px 0px 0px 1px red inset;
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
          box-shadow: 0px 0px 0px 1px red inset;
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
              text-align: right;
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
