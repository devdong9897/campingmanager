import styled from "@emotion/styled";

export const ClientWrapper = styled.div`
    width:100%;
    height: auto;
    padding-top:50px;
    padding-bottom:150px;
    /* background-color: lightgray; */
    .client_inner {
        width:auto;
        height:auto;
        overflow:hidden;
        padding:10px;
        .client_list_top{
            width: 100%;
            height: 300px;
            background-color: white;
            box-shadow: 2px 2px 2px #999;
            border:1px solid #eee;
            padding:20px;
            ul {
                width: 100%;
                display: flex;
                flex-direction:column;
                li {
                    display: flex;
                    justify-content:space-between;
                    width:100%;
                    height:50px;
                    border:1px solid #eee;
                    line-height:50px;
                    text-align:center;
                }
                    li:first-child span {
                    width: 25%;
                    border:1px solid #eee;
                    border-right:0;
                    border-bottom:none;
                    }
                    li:nth-child(2) span:first-child, li:nth-child(3) span:first-child{
                        width:25%;
                        border:1px solid #eee;
                        border-bottom:none;
                        border-top:none;
                    }
            }
            .client_top_button {
                margin-top:15px;
                text-align:center;
            }
        }
        .client_list_bottom{
            width: 100%;
            height: auto;
            background-color: white;
            box-shadow: 2px 2px 2px #999;
            border:1px solid #eee;
            padding:20px;
            ul {
                width: 100%;
                display: flex;
                flex-direction:column;
                li {
                    display: flex;
                    justify-content:space-between;
                    width:100%;
                    height:40px; 
                    border-bottom:1px solid black;
                    font-size:15px;
                    padding:0 15px;
                    line-height:40px;
                }
                li:first-child {
                    display: flex;
                    justify-content:space-between;
                    width:100%;
                    height:40px; 
                    border-bottom:1px solid black;
                    background-color: lightgray;
                    font-size:15px;
                    padding:0 15px;
                    line-height:40px;
                }
            }
            .client_bottom_button {
                margin-top:15px;
                text-align:center;
            }
        }
    }
`;
