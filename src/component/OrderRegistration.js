import React from 'react'
import { OrderRegistrationWrapper } from '../css/orderregistration-style'

const OrderRegistration = () => {
  return (
    <OrderRegistrationWrapper>
        <div className='orderregistration_wrapper'>
        <div className='itemmanage_inner'>
            <div className='orderregistration_left'>
                <h2>상품명</h2>
                <input type="text"/>
                <h2>카테고리 설정</h2>
                  <select>
                    <option>분류</option>
                    <option>축산물</option>
                    <option>수산물</option>
                    <option>소스/드레싱</option>
                    <option>밀키트</option>
                    <option>농산물</option>
                  </select>
                <h2>상품가격</h2>
                <input type="text"/>
                <h2>판매상태</h2>
                <button>판매</button>
                <button>판매안함</button>
                <h2>상품상세설명</h2>
                <textarea cols="65" rows="10"></textarea>
            </div>

            <div className='orderregistration_right'>
                <h2>상품 메인 이미지</h2>
                <div className='orderregistration_right_innerbox'>sdf</div>
                <h2>상품 상세 이미지</h2>
                <div className='orderregistration_right_innerbox'>df</div>
              <button>상품 등록</button>
            </div>
            </div>
        </div>
    </OrderRegistrationWrapper>
  )
}

export default OrderRegistration