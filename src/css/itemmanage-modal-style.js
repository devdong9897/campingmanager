import styled from "@emotion/styled";

export const ItemManageModalWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 999999;
    .recoitem_wrapper {
        width:auto;
        height: auto;
        overflow: hidden;
        .recoitem_top{
            input {
                margin-right:10px;
                border:1px solid #000;
                height: 20px;
            }
            .addbox, .editbox {
                border:none;
                background-color: white;
                padding:5px 10px;
                border-radius:10px;
                &:hover {
                    background-color: rgba(100,100,100,0.1);
                }
            }
        }
        .recoitem_bottom {
            width: 100%;
            height:auto;
            overflow:hidden;
            margin-top:10px;
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
                grid-template-columns:0.5fr 3fr 0.5fr 0.5fr 1.5fr 0.5fr;
                
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
            li:hover{
                cursor: pointer;
                background-color: lightyellow;
            }
            li:first-child{
                border-bottom:none;
                background-color: lightgray;
            }
        }
        }
    }
`