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
                height: auto;
                overflow: hidden;
                li {
                    display: grid;
                    grid-template-columns:1fr 1fr 1fr 1fr;
                    width:100%;
                    height:auto;
                    border:1px solid #eee;
                    text-align: center;
                    span{
                        float:left;
                        width: 100%;
                        height:30px;
                        line-height:30px;
                        border:1px solid #000;
                        input{
                        border:none;
                        }
                    }
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
