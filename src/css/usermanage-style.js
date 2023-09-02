import styled from "@emotion/styled";

export const UserWrapper = styled.div`
    width:100%;
    height: auto;
    padding-top:50px;
    padding-bottom:150px;
    /* background-color: lightgray; */
    .user_inner {
        width:auto;
        height:auto;
        overflow:hidden;
        padding:10px;
        .user_list_top{
            width: 100%;
            height: auto;
            background-color: white;
            box-shadow: 2px 2px 2px #999;
            border:1px solid #eee;
            ul {
                width: 100%;
                display: flex;
                flex-direction:column;
                li {
                    display: flex;
                    justify-content:flex-start;
                    width:100%;
                    height:50px;
                    border:1px solid #eee;
                    line-height:50px;
                    .user_box{
                        border:none;
                    }
                }
                    li:first-child span {
                    border:1px solid #eee;
                    border-right:0;
                    border-bottom:none;
                    }
                    li:first-child span:nth-child(odd),
                    li:nth-child(2) span:first-child, 
                    li:nth-child(3) span:first-child {
                        background-color: lightgray;
                        width:20%;
                        border:1px solid #eee;
                        border-bottom:none;
                        border-top:none;
                        text-align:center;                       
                    }
                    li:first-child span:last-child input:last-child{
                        margin-left:10px;
                    }
                    li:first-child span:nth-child(even), 
                    li:nth-child(2) span:last-child,
                    li:nth-child(3) span:last-child{
                        width:30%;
                        text-indent: 10px;
                    }
            }
            .user_top_button {
                margin:15px;
                text-align:center;
                button{
                    padding:5px 20px;
                    background-color: lightgray;
                    border:none;
                }
            }
        }
        .user_list_bottom{
            width: 100%;
            height: auto;
            background-color: white;
            box-shadow: 2px 2px 2px #999;
            border:1px solid #eee;
            ul {
                width: 100%;
                height: auto;
                overflow: hidden;
                li {
                    float:left;
                    display: grid;
                    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                    width:100%;
                    height:auto; 
                    text-align: center;
                    
                    span{
                        float:left;
                        width: 100%;
                        height:auto;
                        line-height: 30px;
                        border:1px solid #000;
                        border-right:none;
                        border-bottom:none;
                    }
                    span:last-child {
                        border-right:1px solid  #000;
                    }
                }
                li:first-child{
                background-color: lightgray;
            }
                li:last-child {
                    border-bottom:1px solid #000;
                }
            }
            .user_bottom_button {
                margin:15px 0;
                text-align:center;
                button{
                    padding:5px 20px;
                    background-color: lightgray;
                    border:none;
                }
            }
        }
    }
`;
