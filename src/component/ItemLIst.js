import React, { useEffect, useState } from "react";
import { ItemListWrapper } from "../css/itemlist-style";
import { ItemManageWrapper } from "../css/itemmanage-style";
import {
  getItemSearch,
  getRecommendItemList,
  itemDelete,
  itemEdit,
  recommendItemAdd,
} from "../api/itemFetch";
import ItemEditList from "./ItemEditList";

const ItemList = () => {
  const [recommendList, setRecommentList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [itemListEdit, setItemListEdit] = useState([]);
  const [itemListDelete, setItemListDelete] = useState([]);
  // 수정중인 카테고리가 같으면 편집중, 다르면 편집아님 표시
  const [categoryEdit, setCategoryEdit] = useState(null);

  // 추천아이템 리스트
  const recItemList = async () => {
    try {
      const data = await getRecommendItemList();
      setRecommentList(data.list);
    } catch (err) {
      console.log(err);
    }
  };

  // 아이템 수정
  const toggleEditMode = async () => {
    try {
      await itemEdit();
      console.log("상품 수정하기이이이");
      setItemListEdit();
    } catch (err) {
      console.log(err);
    }
  };

  // 아이템 삭제
  const handleDelete = async idx => {
    console.log("handleDelete : ", idx);
    try {
      const data = await itemDelete(idx);
      // console.log("상품 삭제에에에에에에", data);
      recItemList();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    recItemList();
  }, []);

  // 현재 팝업창이보이는지 아닌지 셋팅
  const [itemWinVis, setItemWinVis] = useState(false);
  const [itemState, setItemState] = useState("");

  // 추천아이템 추가
  const [newItem, setNewItem] = useState("");
  const [newItemDate, setNewItemDate] = useState("");
  const handleClickAddReco = () => {
    setItemWinVis(true);
    setItemState("add");
  };

  const itemBestAdd = async () => {
    try {
      const result = await recommendItemAdd(newItem, newItemDate);
      recItemList();
      setNewItem("");
      setNewItemDate("");
      setItemWinVis(false);
    } catch (err) {
      console.log(err);
    }
  };

  // 아이템 선택
  const handleChangeNewItem = _name => {
    setNewItem(_name);
  };
  // 날짜 선택 값
  const handleChangeNewItemDate = _value => {
    setNewItemDate(_value);
  };

  // 베스트아이템 수정
  const [bestItemEdit, setBestItemEdit] = useState("");
  const handleBestItemChange = _bestNum => {
    setItemWinVis(true);
    setItemState("edit");

    setBestItemEdit(_bestNum);
  };
  const itemBestEdit = async () => {
    console.log(bestItemEdit);
    console.log(newItem);
    console.log(newItemDate);
    const itemData = {
      ibestItem: bestItemEdit,
      iitem: newItem,
      monthLike: newItemDate,
    };

    try {
      const result = await itemEdit(itemData);
      recItemList();
      setBestItemEdit("");
      setNewItem("");
      setNewItemDate("");
      setItemWinVis(false);
    } catch (err) {
      console.log(err);
    }
  };

  // 상품 전체 목록 iitem 선택을 위해서
  const [searchList, setSearchList] = useState([]);
  // 아이템 검색리스트
  const itemSearchList = async () => {
    try {
      const data = await getItemSearch();
      setSearchList(data.itemList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    itemSearchList();
  }, []);
  // 제품 목록을 클릭했을 때
  const haldeChoiceIitem = _item => {
    console.log("haldeChoiceIitem", _item.iitem);
    setNewItem(_item.iitem);
  };

  return (
    <ItemListWrapper>
      <div className="recoitem_wrapper">
        <div className="recoitem_inner">
          <h1>추천아이템 관리</h1>
          <div className="recoitem_admin_add_right">
            <p>* 안내사항</p>
            <p>추천상품 이름을 입력하여 추천아이템을 추가합니다</p>
            <button onClick={handleClickAddReco}>추천아이템 추가</button>
          </div>
          <div className="recoitem_inner_list">
            <ul>
              <li>
                <span>번호</span>
                <span>상품명</span>
                <span>이미지</span>
                <span>가격</span>
                <span>상품 등록일</span>
                <span>비고</span>
              </li>
              {recommendList.map((item, index) => (
                <ItemEditList
                  key={item.ibestItem}
                  item={item}
                  handleDelete={handleDelete}
                  handleBestItemChange={handleBestItemChange}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* 상품 전체 목록 출력하여서 iitem 을 선택할 수있도록 페이지 처리 */}
      {/* 추후 컴포넌트 빼주기 */}
      {itemWinVis ? (
        <div
        className="whatisthis"
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          width: "50%",
          height: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0,0,0,0.5)",
          zIndex: 999,
        }}
        >
          <ItemManageWrapper>
            <div className="itemmanage_wrapper">
              {itemState === "add" ? (
                <h1>추천아이템 추가 </h1>
              ) : (
                <h1>추천아이템 수정 </h1>
              )}

              <div className="recoitem_admin_add">
                <div className="recoitem_admin_add_inner">
                  <div className="recoitem_admin_add_left">
                    {/* <h2>추천아이템</h2> */}
                    <input
                      type="text"
                      value={newItem}
                      // onChange={e => handleChangeNewItem(e.target.value)}
                    />
                    <input
                      type="date"
                      value={newItemDate}
                      onChange={e => handleChangeNewItemDate(e.target.value)}
                    />
                    {itemState === "add" ? (
                      <button onClick={itemBestAdd}>추가하기 </button>
                    ) : (
                      <button onClick={itemBestEdit}>수정하기 </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="itemmanage_bottom">
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
                      <span>{item.status}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ItemManageWrapper>
        </div>
      ) : null}
    </ItemListWrapper>
  );
};

export default ItemList;
