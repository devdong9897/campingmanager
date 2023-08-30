import styled from "@emotion/styled";

export const OrderManageWrapper = styled.div`
    width:100%;
    height: auto;
    padding-top:50px;
    padding-bottom:150px;
    /* background-color: lightgray; */
    .order_manage_inner {
        width:auto;
        height:auto;
        overflow:hidden;
        padding:10px;
        .order_manage_top{
            width: 100%;
            height: auto;
            background-color: white;
            box-shadow: 2px 2px 2px #999;
            border:1px solid #eee;
            padding:20px;
            ul {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction:column;
                overflow: hidden;
                li {
                    display: flex;
                    justify-content:space-around;
                    width:100%;
                    height:auto;
                    border:1px solid #eee;
                    line-height:30px;
                    text-align:center;
                    padding:0 10px;

                    div {
                        span{
                        display: block;
                        }
                        button{
                            margin-top:-30px;
                        }
                    }   
                }
                li:first-child{
                    border-bottom:none;
                    background-color: #ddd;
                }
            }
        }
    }
`;
