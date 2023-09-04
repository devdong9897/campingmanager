import React from 'react'
import { OrderRefundWrapper } from '../css/orderrefund-style'

const OrderRefund = () => {
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
              <button>오늘</button>
              <button>3일</button>
              <button>7일</button>
              <button>1개월</button>
              <input type="date"/> ~ <input type="date"/>
            </span>
            <span>주문자 아이디</span>
            <span>
            <input type="text" className="order_refund_box"/>
            </span>
          </li>
          <li>
            <span>주문번호</span>
            <span>
              <input type="text" className="order_refund_box"/>
            </span>
            <span>주문자 휴대전화</span>
            <span>
            <input type="text" className="order_refund_box"/>
            </span>
          </li>
          <li>
            <span>주문자명</span>
            <span>
            <input type="text" className="order_refund_box"/>
            </span>
            <span>주문자 이메일</span>
            <span>
            <input type="text" className="order_refund_box"/>
            </span>
          </li>
        </ul>
        <div>
          <button>검색</button>
        </div>
      </div>

      <div className="order_refund_bottom">
        <ul>
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
          
          <li>
            <span>A</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
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
    </OrderRefundWrapper>
  )
}

export default OrderRefund