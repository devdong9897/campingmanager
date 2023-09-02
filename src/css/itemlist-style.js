import styled from "@emotion/styled";

export const ItemListWrapper = styled.div`
    width:100%;
    height: auto;
    padding-bottom:150px;
    background-color: aliceblue;
    overflow: hidden;
    .itemlist_inner {
        width: 100%;
        .itemlist_itempic {
            width: 30%;
            height: auto;
            background-color:#eee;
            border:1px solid #000;
            border-radius: 5px;
            float:left;
        }
        .itemlist_desc {
        width: 65%;
        height:auto;
        background-color: #fff;
        float:right;
        border:1px solid #000;
        border-radius:5px;
        padding:20px;
        }
    }
    
`