import React, { useEffect, useState } from 'react'
import { OrderRefundWrapper } from '../css/orderrefund-style'
import { getOrderRefund } from '../api/orderFetch'
import { useParams } from 'react-router'

const OrderRefund = () => {
  const [orderRefund, setOrderRefund] = useState([])
  const params = useParams()

  const OrderRefundList = async () => {
    try {
      const data = await getOrderRefund(params)
      console.log("환불관리 데이터 들어오나",data)
      setOrderRefund(data)
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    OrderRefundList()
  },[])

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
          </li>
          <li>
            <span>검색어</span>
            <span>
              <select>
                <option>주문번호</option>
                <option>주문자명</option>
                <option>주문자 아이디</option>
                <option>주문자 휴대전화</option>
                <option>주문자 이메일</option>
              </select>
              <input type="text" className='searchbox'/>
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
          
          {orderRefund.map((item, index) => (
            <li key={index}>
              <span>{item.orderDate}</span>
              <span>{item.iorder}</span>
              <span>{item.name}</span>
              <span>{item.orderPrice}</span>
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
    </OrderRefundWrapper>
  )
}

export default OrderRefund