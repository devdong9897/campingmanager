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
        overflow: hidden;
        li {
          float:left;
          display: grid;
          grid-template-columns:1fr 2fr 1fr 2fr;
          width: 100%;
          height: auto;
          border: 1px solid #ccc;
          line-height: 30px;
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
        li:first-child span:nth-child(2) {
          margin:0 auto;
        }
        li:first-child,
        li:nth-child(2) {
          border-bottom: none;
          span:first-child,
          span:last-child
          {
            width:auto;
            height: auto;
          }

        }
        li:nth-of-type(1) span:nth-of-type(4) input,
        li:nth-of-type(2) span:nth-of-type(2) input,
        li:nth-of-type(2) span:nth-of-type(4) input,
        li:nth-of-type(3) span:nth-of-type(2) input,
        li:nth-of-type(3) span:nth-of-type(4) input{
          width:100%;
          height: 30px;
          float:left;
          background-color: lightgray;
          border:none;
          background-color: white;
          text-indent:10px;
        }
        li:nth-of-type(1) span:first-child,
        li:nth-of-type(1) span:nth-child(3),
        li:nth-of-type(2) span:first-child,
        li:nth-of-type(2) span:nth-child(3),
        li:nth-of-type(3) span:first-child,
        li:nth-of-type(3) span:nth-child(3){
          background-color: lightgray;
          text-align: center;
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