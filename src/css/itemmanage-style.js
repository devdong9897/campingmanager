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
                    width: 100;
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
            }
            }
            div{
                text-align: center;
                padding:10px 0;
                button{
                    padding:5px 20px;
                    background-color: lightblue;
                    border:none;
                    color:white;
                }
            }
            
        }
        .itemmanage_bottom {
            width: 100%;
            height:auto;
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
                grid-template-columns:0.5fr 1.5fr 1fr 1.5fr 1fr ;
                
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