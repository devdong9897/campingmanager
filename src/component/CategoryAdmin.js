import React, { useEffect, useState } from "react";
import { CategoryAdminWrapper } from "../css/categoryadmin-style";
import {
  categoryAdd,
  deleteCategoryItem,
  getCategoryDetail,
  getCategoryList,
} from "../api/categoryFetch";
import CategoryAdminList from "./CategoryAdminList";
import { useLocation } from "react-router";

const CategoryAdmin = () => {
  const [categoryList, setCategoryList] = useState([]);
  // const [categoryAdd, setCategoryAdd] = useState([]);
  const [categoryDetail, setCategoryDetail] = useState([]);
  const [toggleEdit, setToggleEdit] = useState();
  const [categoryDelete, setCategoryDelete] = useState([]);
  // 수정중인 카테고리가 같으면 편집중, 다르면 편집아님 표시
  const [categoryEdit, setCategoryEdit] = useState(null);

  // 카테고리 리스트 보기
  const allCategoryList = async () => {
    try {
      const data = await getCategoryList();
      // console.log("카테고리 데이터 들어옴?", data);
      setCategoryList(data);
    } catch (err) {
      console.log(err);
    }
  };
  // 카테고리 디테일
  const categoryDetailList = async () => {
    try {
      const data = await getCategoryDetail();
      // console.log("카테고리 디테일", data);
      setCategoryDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  // 카테고리 수정
  const toggleEditMode = () => {
    setCategoryEdit();
  };

  // 카테고리 업데이트

  // 카테고리 삭제
  const categoryListDelete = async iitemCategory => {
    console.log("categoryListDelete : ", iitemCategory);
    try {
      const data = await deleteCategoryItem(iitemCategory);
      const callData = await getCategoryList();
      setCategoryList(callData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    allCategoryList();
    categoryDetailList();
  }, []);

  // 카테고리 추가
  const [newCategory, setNewCategory] = useState("");

  const handleClickAdd = async () => {
    try {
      const result = await categoryAdd(newCategory);
      allCategoryList();
      setNewCategory("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeNewCategory = _name => {
    setNewCategory(_name);
  };


  return (
    <CategoryAdminWrapper>
      <div className="category_admin_wrapper">
        <h1>카테고리 관리</h1>
        {/* <button className="category_add_btn">카테고리 추가</button> */}
        <div className="category_admin_top">
          <ul>
            <li>
              <span>ID</span>
              <span>카테고리 명</span>
              <span>카테고리 표시 상태</span>
              <span>비고</span>
            </li>
            {categoryList.map((item, index) => (
              <CategoryAdminList
                key={item.iitemCategory}
                item={item}
                toggleEditMode={toggleEditMode}
                categoryListDelete={categoryListDelete}
              />
            ))}
          </ul>
        </div>

        <h1>카테고리 추가</h1>
        <div className="category_admin_add">
          <div className="category_admin_add_inner">
            <div className="category_admin_add_left_top">
              <h2>카테고리 명</h2>
              <input
                type="text"
                value={newCategory}
                onChange={e => handleChangeNewCategory(e.target.value)}
              />
            </div>

            <div className="category_admin_add_right">
              <p>* 안내사항</p>
              <p>카테고리 이름을 입력하여 카테고리를 추가합니다</p>
              <button onClick={handleClickAdd}>카테고리 생성</button>

            </div>
          </div>
        </div>
      </div>
    </CategoryAdminWrapper>
  );
};

export default CategoryAdmin;
