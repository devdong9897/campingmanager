import React, { useEffect, useState } from 'react'
import { CategoryAdminWrapper } from '../css/categoryadmin-style'
import getCategoryList, { getCategoryDetail } from '../api/categoryFetch'

const CategoryAdmin = () => {
  const [categoryList, setCategoryList] = useState([])
  const [categoryDetail, setCategoryDetail] = useState([])
  const [categoryEdit, setCategoryEdit] = useState(false)
  const [categoryDelete, setCategoryDelete] = useState()
  // 수정중인 카테고리가 같으면 편집중, 다르면 편집아님 표시
  const [categoryEditBtn, setCategoryEditBtn] = useState(null)
  // 카테고리 리스트
  const AllCategoryList = async () => {
    try {
      const data = await getCategoryList()
      console.log("카테고리 데이터 들어옴?", data)
      setCategoryList(data)
    }catch(err) {
      console.log(err)
    }
  }
  // 카테고리 디테일
  const CategoryDetailList = async () => {
    try {
    const data = await getCategoryDetail()
    console.log("카테고리 디테일",data)
    setCategoryDetail(data)
    }catch(err) {
    console.log(err)
    }
  }

  // 카테고리 수정
  const toggleEditMode = () => {
    setCategoryEditBtn()
  }

  // 카테고리 업데이트

  // 카테고리 삭제
  // const categoryListDelete = async iitem => {
  //   try {
  //     await deleteCategoryItem(iitem)
  //     const updatedCategoryItem = categoryDelete.filter(item => item.iitem !== iitem)
  //     setCategoryDelete(updatedCategoryItem)
  //   }catch(err) {
  //     console.log(err)
  //   }
  // }
  useEffect(() => {
    AllCategoryList()
    CategoryDetailList()
  },[])

  return (
    <CategoryAdminWrapper>
        <div className="category_admin_wrapper">
          <h1>카테고리 관리</h1>
          <button className="category_add_btn">카테고리 추가</button>
            <div className='category_admin_top'>
              <ul>
                <li>
                  <span>ID</span>
                  <span>카테고리 명</span>
                  <span>카테고리 표시 상태</span>
                  <span>비고</span>
                </li>
                {categoryList.map((item, index) => (
                  <li key={index}>
                      <span>{item.iitemCategory}</span>
                      <span>{item.name}</span>
                      <span>{item.status === 1 ? ("판매중") :("판매중지")}</span>
                      <span>
                        <button onClick={toggleEditMode}>카테고리 수정</button>
                        <button>카테고리 삭제</button>
                      </span>
                  </li>
                ))}
              </ul>
            </div>
                        

                <div className='category_admin_add'>
              <div className='category_admin_add_inner'>
                <div className='category_admin_add_left_top'>
                  <h2>카테고리 명</h2>
                  <input type="text"/>
                  <h2>카테고리 ID</h2>
                  <input type="text"/>
                <div className='category_admin_add_left_bottom'>
                  <h2>카테고리 표시 상태</h2>
                    <button>표시</button><button>표시안함</button>
                </div>
                </div>

                <div className='category_admin_add_middle'>
                  <div className='category_admin_add_middle_top'>
                    <h2>카테고리 URL</h2>
                    <input type="text"/>
                  </div>
                  <div className='category_admin_add_middle_bottom'>
                    <p>※카테고리 URL는 ID값에 따라 URL주소가 달라집니다.</p>
                    <h2>카테고리 설명</h2>
                    <textarea cols="30" rows="10"></textarea>
                  </div>
                </div>

                <div className='category_admin_add_right'>
                  <p>* 안내사항</p>
                  <p>카테고리 이름을 입력하여 카테고리를 추가합니다</p>
                  <p>카테고리 표시 상태를 결정하여 보일지 안보일지 여부를 설정할 수 있습니다.</p>
                  <p>카테고리 URL은 카테고리 ID를 입력한 값에 따라 URL 주소가 갱신됩니다.</p>
                  <button>카테고리 생성</button>
                </div>
              </div>
            </div>            
        </div>
    </CategoryAdminWrapper>
  )
}

export default CategoryAdmin