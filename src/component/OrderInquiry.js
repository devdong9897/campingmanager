import React, { useEffect, useState } from 'react'
import { OrderInquiryWrapper } from '../css/orderinquiry-style'
import getOrderList from '../api/orderFetch'
import { useParams } from 'react-router-dom'

const OrderInquiry = () => {
  const [orderList, setOrderList] = useState([])
  // const iorder = searchParams.get("iorder")

  // 전체 주문 조회 리스트 보기
  const AllOrderList = async () => {
    try {
      const data = await getOrderList()
      console.log("전체주문조회 조회되나?", data)
      setOrderList(data)
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    AllOrderList()
  },[])
  return (
    <OrderInquiryWrapper>
  <div className="order_inquiry_wrapper">
    <div className="order_inquiry_inner">
      <h1>전체 주문 조회</h1>
      <div className="order_inquiry_top">
        <ul>
          <li>
            <span>주문일</span>
            <span>
              <button>오늘</button>
              <button>3일</button>
              <button>7일</button>
              <button>1개월</button>
              <input type="date"/> ~ <input type="date"/>
            </span>
            <span></span>
            <span></span>
            </li>
            <li>
            <span>검색어</span>
            <span>
              <select>
                <option value="0">주문번호</option>
                <option value="1">주문자명</option>
                <option value="2">주문자 아이디</option>
                <option value="3">주문자 휴대전화</option>
                <option value="4">주문서 이메일</option>
              </select>
              <input type="text" className='searchbox'/>
            </span>
          </li>
        </ul>
        <div>
          <button>검색</button>
        </div>
      </div>

      <div className="order_inquiry_bottom">
        <ul>
          <li>
            <span>주문일</span>
            <span>주문번호</span>
            <span>주문자</span>
            <span>총 상품금액</span>
            <span>총 주문금액</span>
            <span>배송상태</span>
            <span>취소</span>
          </li>
          {orderList.map((item, index) => (
            <li key={index}>
              <span>{item.orderDate}</span>
              <span>{item.iorder}</span>
              <span>{item.name}</span>
              <span>{item.orderPrice}</span>
              <span>{item.totalPrice}</span>
              <span>{item.shippingStatus}</span>
              <span>{item.refundStatus}</span>
            </li>
          ))}
        </ul>
      <div>
      </div>
      </div>
    </div>
  </div>
  </OrderInquiryWrapper>
  )
}

export default OrderInquiry