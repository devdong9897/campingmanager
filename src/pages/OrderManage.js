import React from 'react'
import { OrderManageWrapper } from '../css/order-manage-style'

const OrderManage = () => {
  return (
    <OrderManageWrapper>
      <div className='order_manage_wrapper'>
        <div className='order_manage_inner'>
        <h1>전체 주문 조회</h1>
        <div className='order_manage_top'>
            <ul>
                <li>
                  <span>주문일(결제일)</span>
                  <span>주문번호</span>
                  <span>주문자</span>
                  <span>총 구매금액</span>
                  <span>배송상태</span>
                </li>
                <li>
                  <span>1985-03-03</span>
                  <span>22525</span>
                  <span>나는나</span>
                  <span>30</span>
                  <div>
                    <p>배송중파손</p>
                    <button>취소</button>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </OrderManageWrapper>
  )
}

export default OrderManage