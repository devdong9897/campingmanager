import React from 'react'
import { CategoryAdminWrapper } from '../css/categoryadmin-style'

const CategoryAdmin = () => {
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
                  <span>카테고리 URL</span>
                  <span>카테고리 설명</span>
                  <span>카테고리 표시 상태</span>
                  <span>응..가</span>
                </li>
                <li>
                  <span>ㅁㅁㅁ</span>
                  <span>ㅁㅁㅁ</span>
                  <span>ㅁㅁㅁ</span>
                  <span>ㅁㅁㅁ</span>
                  <span>ㅁㅁㅁ</span>
                  <span>ㅁㅁㅁ</span>
                </li>
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