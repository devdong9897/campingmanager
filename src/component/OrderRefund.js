import React, { useEffect, useState } from "react";
import { OrderRefundWrapper } from "../css/orderrefund-style";
import { getOrderRefund } from "../api/orderFetch";
import { useParams } from "react-router";

const OrderRefund = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchNum, setSearchNum] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [refundResult, setRefundResult] = useState([]);

  // 검색하면 실행하는 함수
  const handlesearchData = async () => {
    const sendData = {
      startDate: startDate,
      endDate: endDate,
      listBox: searchNum,
      keyword: searchValue
    }
    // console.log(`/api/admin/refund${sendData.startDate ? `?startDate=${sendData.startDate}` : ""
    //   }${sendData.endDate ? `&endDate=${sendData.endDate}` : ""}${sendData.listBox ? `&listBox=${sendData.listBox}` : ""
    //   }${sendData.keyword ? `&keyword=${sendData.keyword}` : ""}`)
    try {
      const data = await getOrderRefund(sendData);
      const KoreanData = data.map(item => {
        if (item.refundStatus === 0) {
          return { ...item, refundStatus: "환불 대기" };
        } else if (item.shippingStatus === 1) {
          return { ...item, refundStatus: "환불 처리중" };
        } else if (item.shippingStatus === 2) {
          return { ...item, refundStatus: "배송 환불완료" };
        } else if (item.shippingStatus === 3) {
          return { ...item, refundStatus: "배송 환불 불가" };
        }
        return item;
      });
      console.log("awdwad",KoreanData);
      setRefundResult(KoreanData);
      console.log("실행했니?", data);
    } catch (err) {
      console.log(err);
    }
  }


  // // 여기 들어올때 실행하는 함수
  // const todayfunc = async() => {
  //   const today = new Date().toISOString().slice(0, 10);
  //   console.log(today);
  //   try{
  //     console.log("awd");
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
  return (
    <OrderRefundWrapper>
      <div className="order_refund_wrapper">
        <div className="order_refund_inner">
          <h1>환불관리</h1>
          <div className="order_refund_top">
            <ul>
              <li>
                <span>기간</span>
                <span>
                  <input type="date" onChange={e => setStartDate(e.target.value)} /> ~ <input type="date" onChange={e => setEndDate(e.target.value)} />
                </span>
              </li>
              <li>
                <span>검색어</span>
                <span>
                  <select onChange={e => setSearchNum(e.target.value)}>
                    <option value={0}>주문번호</option>
                    <option value={1}>주문자명</option>
                    <option value={2}>주문자 아이디</option>
                    <option value={3}>주문자 휴대전화</option>
                    <option value={4}>주문자 이메일</option>
                  </select>
                  <input type="text" className="searchbox" onChange={e => setSearchValue(e.target.value)} />
                </span>
              </li>
            </ul>
            <div className="note">
              검색유형을 선택하여 검색할시 반드시 검색창에 검색유형에 맞는
              입력값을 넣어주셔야합니다. 오늘 날만 검색할때에는 날짜를 오늘 날로 설정해줍시오.
              <br />
              예:주문번호 - 검색값: 01 , 주문자명 - 검색값 : 홍길동
            </div>
            <div>
              <button onClick={handlesearchData}>검색</button>
            </div>
          </div>

          <div className="order_refund_result">
            <ul className="order_refund_title">
              <li>
                <span>주문일</span>
                <span>환불접수일</span>
                <span>환불완료일</span>
                <span>주문번호&상품번호</span>
                <span>주문자</span>
                <span>총수량</span>
                <span>총 환불액</span>
                <span>처리상태</span>
              </li>
            </ul>
            {refundResult.length ? (
              <ul className="refund_list_result_box">
                {refundResult.map((item, index) => (
                  <li key={index}>
                    <span>{item.orderDate}</span>
                    <span>{item.refundStartDate}</span>
                    <span>{item.refundEndDate}</span>
                    <span>
                      <p>{item.irefund}</p>
                      <p>{item.iorderitem}</p>
                    </span>
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                    <span>{item.totalRefund}</span>
                    <span>{item.refundStatus}</span>
                  </li>
                ))}
              </ul>
            ) : ("없습니다.")}

          </div>
        </div>
      </div>
    </OrderRefundWrapper>
  );
};

export default OrderRefund;
