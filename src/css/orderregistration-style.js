import styled from "@emotion/styled";

export const OrderRegistrationWrapper = styled.div`
    width:100%;
    height: auto;
    background-color: aliceblue;
    overflow: hidden;
    .orderregistration_left {
        width: 50%;
        height:auto;
        overflow: hidden;
        padding:10px;
        float:left;
        input{
            height: 30px;
            width:45%;
            border-radius:10px;
            text-indent: 10px;
        }
        h2 {
            margin-top:20px;
        }

        select{
                width: 20%;
                height: 30px;
                text-indent: 5px;
                border-radius: 10px;
                border:2px solid #000;
            }
        button {
            padding:5px 50px;
            margin-right:5px;
            background-color:white;
        }
        button:hover {
            background-color: lightyellow;
        }
        textarea {
            resize:none;
            text-indent: 10px;
            border-radius: 5px;
            width: 90%;
            padding-top:5px;
        }
}
.orderregistration_right {
    width: 50%;
    height:auto;
    padding:10px;
    float:right;
    h2{
        margin-top:10px;
    }
    .orderregistration_right_innerbox{
        width: 100%;
        height:300px;
        border-radius: 5px;
        background-color:beige;
    };
    button{
        float:right;
        margin-top:20px;
        padding:5px 15px;
        background-color: white;
        border-radius: 5px;
    }
    button:hover{
        background-color: lightgray;
    }
}
`