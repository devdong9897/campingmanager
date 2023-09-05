import styled from "@emotion/styled";

export const ItemListWrapper = styled.div`
    width:100%;
    height: auto;
    padding-bottom:20px;
    background-color: aliceblue;
    overflow: hidden;
    .itemlist_inner {
        width: 100%;
        padding:10px;
        .itemlist_itempic {
            width: 50%;
            height: 300px;
            background-color:lightgray;
            border:1px solid #000;
            border-radius: 5px;
            float:left;
        }
        .itemlist_desc {
        width: 50%;
        height:300px;
        background-color: #fff;
        float:right;
        border:1px solid #000;
        border-radius:5px;
        padding:20px;
    }
    button{
        margin-top:20px;
        float:right;
    }
    }
    
`