import styled from "@emotion/styled";

export const ItemStockManageWrapper = styled.div`
    width:100%;
    height: auto;
    padding-top:50px;
    padding-bottom:150px;
    .itemstockmanage_wrapper{
        width:100%;
        height: auto;
        overflow: hidden;
        .itemstockmanage_top{
            width: 100%;
            height:auto;
            overflow:hidden;
            padding-bottom:15px;
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
                    input {
                        border:none;
                        float:left;
                        line-height:30px;
                        text-indent: 10px;
                        width: 100%;
                    }
                    select{
                        float:left;
                        width: 100px;
                        height: 20px;
                        margin-top:5px;
                        margin-left:30px;
                    }
                }
            }
            span:nth-of-type(odd){
                background-color: lightgray;
            }
            span:last-child {
                border-right:none;
            }
            li{
                border-bottom:none;
            }
            li:last-child{
                border-bottom:1px solid #000;
            }
            
            }
            div {
                text-align: center;
                button{
                margin-top:30px;
                background-color: lightblue;
                border:none;
                color:white;
                padding:5px 30px;
                }
            }
        }
        .itemstockmanage_bottom{
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
                grid-template-columns:0.5fr 3fr 1fr 1.5fr 1fr 1fr 1fr;
                span{
                    float:left;
                    width: 100%;
                    height: 30px;;
                    line-height:30px;
                    border-right:1px solid #000;
                }
                span:last-child {
                    border-right: none;
                }
            }
            li:first-child{
                background-color: lightgray;
            }
            li{
                border-bottom:none;
            }
            li:last-child{
                border-bottom:1px solid #000;
            }
        }
        }
    }
`