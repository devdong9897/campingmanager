import React from 'react'
import { ItemListWrapper } from '../css/itemlist-style'

const ItemLIst = () => {
  return (
    <ItemListWrapper>
        <div className='itemlist_wrapper'>
            <div className='itemlist_inner'>
            <h1>아이템 목록</h1>
              <div className='itemlist_itempic'>
                df
              </div>
              <div className='itemlist_desc'>
                <h1>상품명</h1>
                <p>상품 카테고리</p>
                <p>상품 요약설명</p>
                <p>상품 가격</p>
                <p>상품 판매여부</p>
              </div>
            </div>
        </div>
    </ItemListWrapper>
  )
}

export default ItemLIst