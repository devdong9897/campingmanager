import React, { useEffect, useState } from 'react'
import { ItemManageWrapper } from '../css/itemmanage-style'
import { getItemSearch } from '../api/itemFetch'

const ItemManage = () => {
    // const [itemSearchList, setItemSearchList] = useState()
    const [searchList, setSearchList] = useState([])
    const [searchKeyword, setSearchKeyword] = useState("")

    const ItemSearchList = async () => {
        try {
            const data = await getItemSearch()
            console.log("아이템 검색 리스트", data)
            setSearchList(data.itemList)
        }catch(err){
            console.log(err)
        }
    }

    // 개별 검색
    // const handleClickSearch = async event => {
    //     setSearchKeyword(event.target.value)
    // }

    useEffect(() => {
        ItemSearchList()
    },[])

  return (
    <ItemManageWrapper>
        <h1>아이템 관리</h1>
        <div className='itemmanage_wrapper'>
            <div className='itemmanage_inner'>
                <div className='itemmanage_top'>
                    <ul>
                        {/* {itemSearchList.map((item, index) => (
                            <li key={index}>
                                
                            </li>
                        ))} */}
                        <li>
                            <span>검색분류</span>
                            <span>
                                <input type="text"/>
                            </span>
                            <span>상품 등록일</span>
                            <span>
                            <input type="text"/>
                            </span>
                        </li>
                        <li>
                            <span>카테고리</span>
                            <span>
                            <input type="text"/>
                            </span>
                            <span>진열 상태</span>
                            <span>
                            <input type="text"/>
                            </span>
                        </li>
                    </ul>
                    <div>
                        <button>검색</button>
                    </div>
                </div>

            <div className='itemmanage_bottom'>
                <div className='itemmanage_bottom_category'>
                    <button>최신순</button>
                    <button>오래된순</button>
                    <button>높은가격순</button>
                    <button>낮은가격순</button>
                </div>
                <ul>
                    <li>
                        <span>번호</span>
                        <span>상품명</span>
                        <span>카테고리</span>
                        <span>가격</span>
                        <span>상품 등록일</span>
                        <span>진열상태</span>
                    </li>
                    {searchList.map((item, index) => (
                        <li key={index}>
                            <span>{item.iitem}</span>
                            <span>{item.name}</span>
                            <span>{item.categoryName}</span>
                            <span>{item.price}</span>
                            <span>{item.createdAt}</span>
                            <span>{item.status}</span>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    </ItemManageWrapper>
  )
}

export default ItemManage