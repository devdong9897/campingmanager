import styled from "@emotion/styled";

export const OrderRefundWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 50px;
  padding-bottom: 150px;
  /* background-color: lightgray; */
  .order_refund_inner {
    width: auto;
    height: auto;
    overflow: hidden;
    padding: 10px;
    .order_refund_top {
      width: 100%;
      height: auto;
      background-color: white;
      box-shadow: 2px 2px 2px #999;
      border: 1px solid #eee;
      ul {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        li {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          height: auto;
          border: 1px solid #ccc;
          line-height: 30px;
          text-align: center;
          button{
            padding:1px 5px;
            margin-right:8px;
            background-color: white;
            border:1px solid #ddd;
            border-radius: 5px;
            margin-top:6px;
          }
          button:hover{
            color:blue;
            border:1px solid blue;
          }
        }
        li:first-child {
          border-bottom: none;
          span:first-child{
            width:250px;
            height: auto;
            background-color: #ddd;
          }
          span:last-child {
            margin-left:10px;
          }
        }
        li:nth-of-type(2) span:first-child{
          width:250px;
          height: auto;
          background-color: #ddd;
        }
        li:nth-of-type(2) .order_refund_box {
          border:none;
          text-indent:10px;
          width:100%;
        }
      }
      div{
        text-align:center;
        margin-top:15px;
        margin-bottom:15px;
        button{
          padding:3px 15px;
          border:none;
          border-radius: 5px;
          font-weight:bold;
        }
      }
    }
    .order_refund_bottom{
      width: 100%;
      height: auto;
      box-shadow: 2px 2px 2px #999;
      margin-top:150px;
      li {
        display: grid;
        grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        width: 100%;
        height: auto;
        line-height: 30px;
        text-align: center;
          span{
            border:1px solid #bbb;
            width:100%;
            border-right:none;
          }
      }
      li:first-child span {
        background-color: lightgray;
      }
    }
  }
`