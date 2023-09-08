import React, { useEffect, useState } from 'react'
import { ItemListWrapper } from '../css/itemlist-style'
import { itemEdit } from '../api/itemFetch'

const ItemList = () => {
  const [itemListEdit, setItemListEdit] = useState()

  // 아이템 수정
  const handleClickEdit = async () => {
    try {
      const iitem = {
        iitem:1,
        iitemCategory:1,
        name:"상품명",
        pic:"",
        price:10000,
        stock:3,
        status:0,
        picUrl:""
      }
      await itemEdit(iitem)
      setItemListEdit()
    }catch(err){
      console.log(err)
    }
  }

  // 아이템 삭제
  const handleDelete = () => {
    // try {
    //   const deleteItem = 
    // }
  }
  useEffect(() => {

  },[])
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
                <button onClick={handleClickEdit}>수정</button>
                <button onClick={handleDelete}>삭제</button>
            </div>
        </div>
    </ItemListWrapper>
  )
}

export default ItemList