import React from 'react'

const RecommendModal = () => {
  return (
    <ItemManageModalWrapper>
              <div className="recoitem_wrapper">
                {itemState === "add" ? (
                  <h1>추천아이템 추가 </h1>
                ) : (
                  <h1>추천아이템 수정 </h1>
                )}
                    <div className="recoitem_top">
                      {/* <h2>추천아이템</h2> */}
                      <input
                        type="text"
                        value={newItem}
                        className="inputnum"
                        // onChange={e => handleChangeNewItem(e.target.value)}
                      />
                      <input
                        type="date"
                        value={newItemDate}
                        onChange={e => handleChangeNewItemDate(e.target.value)}
                      />
                      {itemState === "add" ? (
                        <button className="addbox" onClick={itemBestAdd}>추가하기 </button>
                      ) : (
                        <button className="editbox" onClick={itemBestEdit}>수정하기 </button>
                      )}
                    </div>
                <div className="recoitem_bottom">
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
                      <li key={index} onClick={() => haldeChoiceIitem(item)}>
                        <span>{item.iitem}</span>
                        <span>{item.name}</span>
                        <span>{item.categoryName}</span>
                        <span>{item.price}</span>
                        <span>{item.createdAt}</span>
                        <span>{item.status === 1 ? "진열" : "진열안함"}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ItemManageModalWrapper>
  )
}

export default RecommendModal