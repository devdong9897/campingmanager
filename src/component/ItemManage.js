import React, { useEffect, useState } from "react";
import { ItemManageWrapper } from "../css/itemmanage-style";
import { getItemSearch, getItemSearchList } from "../api/itemFetch";
import { sassNull } from "sass";

const ItemManage = () => {
  // const [itemSearchList, setItemSearchList] = useState()
  const [searchList, setSearchList] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  // 리스트 카테고리순 정렬
  const [sortType, setSortType] = useState("SalesRanking");
  const [searchKeyword, setSearchKeyword] = useState("");

  // 아이템 검색
  const itemSearch = async () => {
    try {
      //http://192.168.0.144:5005/api/admin/item/search?page=0&size=15&sort=iitem%2CDESC
      let _sendQuery = `?page=${page}&size=${size}&sort=iitem,DESC`;
      const data = await getItemSearchList(_sendQuery);
      console.log("아이템 검색", data);
      setSearchList(data.itemList);
    } catch (err) {
      console.log(err);
    }
  };

  // 카테고리 순 검색
  const handleSort = sortType => {
    setSortType(sortType);
    const sortedList = [...searchList];

    switch (sortType) {
      case "SalesRanking":
        sortedList.sort((a, b) => a.stock - b.stock);
        break;
      case "Latest":
        sortedList.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        break;
      case "OldOrder":
        sortedList.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
        break;
      case "HighPrice":
        sortedList.sort((a, b) => b.price - a.price);
        break;
      case "LowPrice":
        sortedList.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setSearchList(sortedList);
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // 검색관련 코드
  const [searchTxt, setSearchTxt] = useState("");
  const [searchStartDate, setSearchStartDate] = useState("");
  const [searchEndDate, setSearchEndDate] = useState("");
  const [searchCate, setSearchCate] = useState("");

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(15);
  const [searchDate, setSerchDate] = useState("");
  // 검색
  const changeSearchCate = _g => {
    // console.log(_g);
    setSearchCate(_g);
  };

  const handleClickSearch = async () => {
    // console.log("searchTxt : ", searchTxt);
    // console.log("searchStartDate : ", searchStartDate);
    // console.log("searchEndDate : ", searchEndDate);
    // console.log("searchCate : ", searchCate);
    // http://192.168.0.144:5005/api/admin/item/search?page=0&size=15&sort=iitem%2CDESC
    const _sendQueryArr = [];
    if (searchTxt !== "") {
      _sendQueryArr.push(`text=${searchTxt}`);
    }
    if (searchStartDate !== "") {
      _sendQueryArr.push(`searchStartDate=${searchStartDate}`);
    }
    if (searchEndDate !== "") {
      _sendQueryArr.push(`searchEndDate=${searchEndDate}`);
    }
    if (searchCate !== "") {
      _sendQueryArr.push(`cate=${searchCate}`);
    }

    let _sendQuery = `?page=${page}&size=${size}&sort=iitem,DESC&`;
    if (_sendQueryArr.length > 0) {
      _sendQuery = _sendQuery + _sendQueryArr.join("&");
    }
    console.log("_sendQuery", _sendQuery);
    try {
      const result = await getItemSearchList(_sendQuery);
      setSearchList(result.itemList);
      setSearchTxt("");
      setSearchStartDate("");
      setSearchEndDate("");
      setSearchCate("");
    } catch (err) {
      console.log(err);
    }
  };
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
    itemSearch();
  }, []);

  return (
    <ItemManageWrapper>
      <h1>아이템 관리</h1>
      <div className="itemmanage_wrapper">
        <div className="itemmanage_inner">
          <div className="itemmanage_top">
            <ul>
              {/* {itemSearchList.map((item, index) => (
                            <li key={index}>
                                
                            </li>
                        ))} */}
              <li>
                <span>검색어</span>
                <span>
                  <input
                    type="text"
                    value={searchTxt}
                    onChange={e => setSearchTxt(e.target.value)}
                  />
                </span>
                <span>상품 등록일</span>
                <span>
                  <input
                    type="date"
                    value={searchStartDate}
                    onChange={e => setSearchStartDate(e.target.value)}
                  />

                  <input
                    type="date"
                    value={searchEndDate}
                    onChange={e => setSearchEndDate(e.target.value)}
                  />
                </span>
              </li>
              <li style={{ display: "flex" }}>
                <span style={{ width: "25%" }}>카테고리</span>
                <div style={{ width: "75%", padding: 0, lineHeight: "30px" }}>
                  <input
                    type="radio"
                    name="userradio"
                    value="11"
                    checked={searchCate === "11" ? "checked" : null}
                    onClick={e => changeSearchCate(e.target.value)}
                  />
                  축산물
                  <input
                    type="radio"
                    name="userradio"
                    value="16"
                    checked={searchCate === "16" ? "checked" : null}
                    onClick={e => changeSearchCate(e.target.value)}
                  />
                  수산물
                  <input
                    type="radio"
                    name="userradio"
                    value="13"
                    checked={searchCate === "13" ? "checked" : null}
                    onClick={e => changeSearchCate(e.target.value)}
                  />
                  소스/드레싱
                  <input
                    type="radio"
                    name="userradio"
                    value="18"
                    checked={searchCate === "18" ? "checked" : null}
                    onClick={e => changeSearchCate(e.target.value)}
                  />
                  밀키트
                  <input
                    type="radio"
                    name="userradio"
                    value="17"
                    checked={searchCate === "17" ? "checked" : null}
                    onClick={e => changeSearchCate(e.target.value)}
                  />
                  농산물
                </div>
              </li>
            </ul>
            <div>
              <button
                // onClick={handSearch}
                onClick={handleClickSearch}
              >
                검색
              </button>
            </div>
          </div>

          <div className="itemmanage_bottom">
            <div className="itemmanage_bottom_category">
              <button onClick={() => handleSort("SalesRanking")}>판매순</button>
              <button onClick={() => handleSort("Latest")}>최신순</button>
              <button onClick={() => handleSort("OldOrder")}>오래된순</button>
              <button onClick={() => handleSort("HighPrice")}>
                높은가격순
              </button>
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
                  <span>{item.status === 1 ? "진열" : "진열안함"}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ItemManageWrapper>
  );
};

export default ItemManage;
