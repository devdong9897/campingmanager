import styled from "@emotion/styled";

export const ItemManageWrapper = styled.div`
    width:100%;
    height: auto;
    padding-top:50px;
    padding-bottom:150px;
    .itemmanage_wrapper {
        width:100%;
        height: auto;
        overflow: hidden;
        .itemmanage_top {
            width: 100%;
            height:auto;
            margin-bottom:50px;
            overflow:hidden;
            ul{
            width: 100%;
            height: auto;
            display: grid;
            overflow: hidden;
            li{
                float:left;
                display: grid;
                height: auto;
                text-align: center;
                border:1px solid #000;
                grid-template-columns:1fr 1fr 1fr 1fr ;
                span{
                    float:left;
                    width: 100%;
                    height: 30px;;
                    line-height:30px;
                    border-right:1px solid #000;  
                    input{
                        border:none;
                        float:left;
                        line-height:30px;
                        text-indent: 10px;
                        width: 100%;
                    }
                }
                span:nth-of-type(odd) {
                    background-color: lightgray;
                }
                span:last-child{
                    border-right:none; 
                }
            }
            li:first-child{
                border-bottom:none;
                span:nth-of-type(4) input{
                    width: 40%;
                }
            }
        }
            div{
                text-align: center;
                padding:10px 0;
                button{
                    margin-top:30px;
                    padding:5px 30px;
                    background-color: lightblue;
                    border:none;
                    color:white;
                }
            }
        }
        .itemmanage_bottom {
            margin-top:100px;
            width: 100%;
            height:auto;
            overflow:hidden;
            .itemmanage_bottom_category {
                padding-bottom : 10px;
                button{
                    margin-right:10px;
                    padding:5px 10px;
                    border:1px solid #000;
                    background-color: white;
                }
                button:hover{
                    background-color: lightyellow;
                }
            }
            ul{
            width: 100%;
            height: auto;
            display: grid;
            overflow: hidden;
            li{
                float:left;
                display: grid;
                height: auto;
                text-align: center;
                border:1px solid #000;
                grid-template-columns:0.5fr 5fr 0.5fr 0.5fr 0.8fr 0.3fr 0.5fr;
                
                span{
                    float:left;
                    width: 100%;
                    height: 30px;;
                    line-height:30px;
                    border-right:1px solid #000;;
                }
                span:last-child {
                    border-right:none;
                }
            }
            li:first-child{
                border-bottom:none;
                background-color: lightgray;
            }
        }
        }
    }
`