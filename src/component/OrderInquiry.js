import React from 'react'
import { OrderInquiryWrapper } from '../css/orderinquiry-style'

const OrderInquiry = () => {
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
              <input type="date"/>
              &nbsp; ~ 
              &nbsp;  
              <input type="date"/>
            </span>
          </li>
          <li>
            <span>주문번호</span>
            <span>
              <input type="text" className="order_box"/>
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
            <span>주문자</span>
            <span>총 상품금액</span>
            <span>총 주문금액</span>
            <span>배송상태</span>
          </li>
          <li>
            <span>sdf</span>
            <span></span>
            <span></span>
            <span></span>
          </li>
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