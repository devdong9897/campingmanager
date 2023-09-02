import React from 'react'
import { ItemManageWrapper } from '../css/itemmanage-style'

const ItemManage = () => {
  return (
    <ItemManageWrapper>
        <h1>아이템 관리</h1>
        <div className='itemmanage_wrapper'>
            <div className='itemmanage_inner'>
                <div className='itemmanage_top'>
                    <ul>
                        <li>
                            <span>검색분류</span>
                            <span>
                                <input type=""/>
                            </span>
                            <span>상품 등록일</span>
                            <span>
                            <input type=""/>
                            </span>
                        </li>
                        <li>
                            <span>카테고리</span>
                            <span>
                            <input type=""/>
                            </span>
                            <span>진열 상태</span>
                            <span>
                            <input type=""/>
                            </span>
                        </li>
                    </ul>
                    <div>
                        <button>검색</button>
                    </div>
                </div>

            <div className='itemmanage_bottom'>
                <ul>
                    <li>
                        <span>번호</span>
                        <span>상품명</span>
                        <span>카테고리</span>
                        <span>상품 등록일</span>
                        <span>진열상태</span>
                    </li>
                    <li>
                        <span>1</span>
                        <span>소고기</span>
                        <span>육고기</span>
                        <span>2023-09-01</span>
                        <span>진열</span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </ItemManageWrapper>
  )
}

export default ItemManage