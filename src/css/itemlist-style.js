import styled from "@emotion/styled";

export const ItemListWrapper = styled.div`
    width:100%;
    height: auto;
    padding-top:50px;
    padding-bottom:150px;
    .recoitem_inner {
        .recoitem_inner_list{
            margin-bottom:100px;
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
                grid-template-columns:0.2fr 3fr 1fr 0.5fr 0.8fr 0.5fr;
                span{
                    float:left;
                    width: 100%;
                    height: 30px;;
                    line-height:30px;
                    border-right:1px solid #000;
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
    .recoitem_admin_add {
            width: 100%;
            height:auto;
            background-color:lightgray;
            border-radius:5px;
            padding:5px;
            overflow: hidden;
            .recoitem_admin_add_inner{
                .recoitem_admin_add_left {
                    width: 33.3333333%;
                    height:auto;
                    float:left;
                    padding:10px;
                    input {
                        width: 80%;
                        height: 30px;
                        border-radius:15px;
                        text-indent: 10px;
                        margin-bottom:15px;
                    }
                    button{
                        padding: 5px 60px;
                        background-color:white;
                        text-align: center;
                        &:hover{
                            background-color: lightyellow;
                        }
                    }
            }

                .recoitem_admin_add_right {
                    padding:10px;
                    p{
                        font-size:16px;
                    }
                    p:nth-child(4){
                        margin-top:10px;
                    }
                    button{
                        border:1px solid #000;
                        border-radius: 10px;
                        background-color:white;
                        padding:5px 10px;
                        float:right;
                        margin-top:10px;
                    }
                    button:hover {
                        background-color: #9DE8FF;
                    }
                }
            } 
        }
    }    
`