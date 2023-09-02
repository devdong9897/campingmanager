import React from 'react'
import { ItemStockManageWrapper } from '../css/itemstockmanage-style'

const ItemStockManage = () => {
  return (
    <ItemStockManageWrapper>
        <div className='itemstockmanage_wrapper'>
            <div className='itemstockmanage_inner'>
                <h1>아이템 재고 관리</h1>
                <div className='itemstockmanage_top'>
                    <ul>
                        <li>
                            <span>검색</span>
                            <span>
                                <input type="text"/>
                            </span>
                            <span>진열상태</span>
                            <span>
                                <input type="text"/>
                            </span>
                        </li>
                        <li>
                            <span>상품분류</span>
                            <span>
                                <select>
                                    <option>분류</option>
                                    <option>대분류</option>
                                    <option>중분류</option>
                                    <option>소분류</option>
                                </select>
                            </span>
                        </li>
                        <li>
                            <span>상품 등록일</span>
                            <span>
                                <input type="text"/>
                            </span>
                        </li>
                    </ul>
                    <div>
                        <button>검색</button>
                    </div>
                </div>

                <h1>상품목록</h1>
                <div className='itemstockmanage_bottom'>
                    <ul>
                        <li>
                            <span>번호</span>
                            <span>상품명</span>
                            <span>총 재고량</span>
                            <span>품목명</span>
                            <span>진열상태</span>
                            <span>판매실적</span>
                            <span>총 누적 판매량</span>
                        </li>
                        <li>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </ItemStockManageWrapper>
  )
}

export default ItemStockManage