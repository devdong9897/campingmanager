import styled from "@emotion/styled";

export const CategoryAdminWrapper = styled.div`
    width:100%;
    height: auto;
    padding-top:50px;
    padding-bottom:150px;
    
    .category_add_btn {
        border-radius: 10px;
        background-color:white;
        padding:5px 10px;
        float:right;
        margin-bottom:10px;
        border:1px solid #000;
    }
    .category_add_btn:hover {
        background-color:#9DE8FF;
    }
    .category_admin_wrapper {
        .category_admin_top {
            padding-bottom:50px;
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
                grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
                span{
                    float:left;
                    width: 100%;
                    height: 30px;;
                    line-height:30px;
                    border-right:1px solid #000;
                }
                span:last-child{
                    border-right:none;;
                }
            }
            li:first-child{
                background-color: lightgray;
                border-bottom:none;
                height: 25px;
            }
        }
        .category_admin_add {
            width: 100%;
            height:auto;
            background-color:lightgray;
            border-radius:5px;
            padding:5px;
            overflow: hidden;
            .category_admin_add_inner{
                .category_admin_add_left_top {
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
                        padding: 5px 50px;
                        background-color:white;
                        text-align: center;
                        &:hover{
                            background-color: lightyellow;
                        }
                    }
            }
                .category_admin_add_left_bottom {
                    margin-top:50px;
                }
                .category_admin_add_middle {
                    float:left;
                    width: 33.33%;
                    p {
                        margin-top:10px;
                        margin-bottom:15px;
                    }
                    input{
                        width: 90%;
                        height: 30px;
                        text-indent:15px;
                        border-radius:15px;
                    }
                    textarea {
                        width:90%;
                        resize:none;
                        border-radius: 10px;
                        text-indent: 10px;
                    };
                }   
                .category_admin_add_right {
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