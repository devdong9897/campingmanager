import React, { useEffect, useState } from 'react'
import { ItemManageWrapper } from '../css/itemmanage-style'
import { getItemSearch, getItemSearchList } from '../api/itemFetch'
import { sassNull } from 'sass'

const ItemManage = () => {
    // const [itemSearchList, setItemSearchList] = useState()
    const [searchList, setSearchList] = useState([])
    const [searchItem, setSearchItem] = useState([])
    // 리스트 카테고리순 정렬
    const [sortType, setSortType] = useState("SalesRanking")
    const [searchKeyword, setSearchKeyword] = useState("")

    // 아이템 검색
    const itemSearch = async () => {
        try {
            const data = await getItemSearch()
            console.log("아이템 검색",data)
            setSearchItem(data)
        }catch(err) {
            console.log(err)
        }
    }
    // 아이템 검색리스트
    const itemSearchList = async () => {
        try {
            const data = await getItemSearchList()
            console.log("아이템 검색 리스트", data)
            setSearchList(data.itemList)
        }catch(err){
            console.log(err)
        }
    }

    // 카테고리 순 검색
    const handleSort = sortType => {
        setSortType(sortType);
        const sortedList = [...searchList]

        switch (sortType) {
            case "SalesRanking":
                sortedList.sort((a,b) => a.stock - b.stock)
                break;
            case "Latest":
                sortedList.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
                break;   
            case "OldOrder":
                sortedList.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
                break; 
            case "HighPrice":
                sortedList.sort((a,b) => b.price - a.price)
                break;    
            case "LowPrice":
                sortedList.sort((a,b) => a.price - b.price)
                break;      
            default:
                break;
        }
        setSearchList(sortedList)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2,'0')
        const day = String(date.getDate()).padStart(2, '0')
        return  `${year}-${month}-${day}`
    }

    // 검색
    const handleClickSearch = () => {
        
    }
    // 개별 검색
    // const handSearch = async event => {
    //     event.preventDefault()
    //     try {

    //     }catch(err){
    //         console.log(err)
    //     }
    //     // setSearchKeyword(event.target.value)
    // }

    useEffect(() => {
        itemSearch()
        itemSearchList()
    },[])

  return (
    <ItemManageWrapper>
        <h1>아이템 관리</h1>
        <div className='itemmanage_wrapper'>
            <div className='itemmanage_inner'>
                <div className='itemmanage_top'>
                    <ul>
                        {/* {itemSearchLiasdst.map((item, index) => (
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
                            <input type="date"/>
                            
                            <input type="date"/>
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
                        <button
                            // onClick={handSearch}
                            onClick={handleClickSearch}
                        >검색</button>
                    </div>
                </div>

            <div className='itemmanage_bottom'>
                <div className='itemmanage_bottom_category'>
                    <button onClick={() => handleSort("SalesRanking")}>판매순</button>
                    <button onClick={() => handleSort("Latest")}>최신순</button>
                    <button onClick={() => handleSort("OldOrder")}>오래된순</button>
                    <button onClick={() => handleSort("HighPrice")}>높은가격순</button>
                    <button onClick={() => handleSort("LowPrice")}>낮은가격순</button>
                </div>
                <ul>
                    <li>
                        <span>번호</span>
                        <span>상품명</span>
                        <span>카테고리</span>
                        <span>가격</span>
                        <span>상품 등록일</span>
                        <span>재고</span>
                        <span>진열상태</span>
                    </li>
                    {searchList.map((item, index) => (
                        <li key={index}>
                            <span>{item.iitem}</span>
                            <span>{item.name}</span>
                            <span>{item.categoryName}</span>
                            <span>{item.price}</span>
                            <span>{formatDate(item.createdAt)}</span>
                            <span>{item.stock}</span>
                            <span>{item.status === 1 ? ("진열") : ("진열안함")}</span>
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