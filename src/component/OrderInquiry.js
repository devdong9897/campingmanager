import React, { useEffect, useState } from "react";
import { OrderInquiryWrapper } from "../css/orderinquiry-style";
import { getOrderList, postOrderState } from "../api/orderFetch";

const OrderInquiry = () => {
  const [orderList, setOrderList] = useState([]);
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [listBox, setListBox] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [orderState, setOrderState] = useState(false);
  const [thisIndex, setThisIndex] = useState("");
  const [thisIorder, setThisIorder] = useState("");
  const [deliveryState, setDeliveryState] = useState("");
  // 주문조회 리스트 볼떄 최근에 저장한 STATE
  const [recent, setRecent] = useState({});

  // 전체 주문 조회 리스트 보기
  const handleOrderList = async () => {
    const sandData = {
      startDate: startDay,
      endDate: endDay,
      listBox: listBox,
      keyword: keyWord,
    };
    setRecent(sandData);

    console.log(sandData);
    try {
      const data = await getOrderList(sandData);
      const KoreanData = data.map(item => {
        if (item.shippingStatus === 0) {
          return { ...item, shippingStatus: "배송 준비중" };
        } else if (item.shippingStatus === 1) {
          return { ...item, shippingStatus: "배송 중" };
        } else if (item.shippingStatus === 2) {
          return { ...item, shippingStatus: "배송 완료" };
        } else if (item.shippingStatus === 3) {
          return { ...item, shippingStatus: "배송 취소" };
        }
        return item;
      });
      setOrderList(KoreanData);
    } catch (err) {
      console.log(err);
    }
  };
  // 오늘날짜 기준
  const handleToday = () => {};
  // 오늘날짜 이후 3일
  const handleThreeDay = () => {};
  // 오늘날짜 이후 7일
  const handleWeekDay = () => {};
  // 오늘날짜 이후 한달
  const handleMonth = () => {};
  // 시작날짜핸들
  const handleTodayDate = e => {
    setStartDay(e.target.value);
  };
  // 끝날짜 핸들
  const handleEndDate = e => {
    setEndDay(e.target.value);
  };
  // 검색유형
  const handleSearchType = e => {
    console.log(e.target.value);
    setListBox(e.target.value);
  };
  // 검색
  const handleText = e => {
    console.log(e.target.value);
    setKeyWord(e.target.value);
  };

  const handleChange = (index, iorder) => {
    setThisIndex(index);
    setThisIorder(iorder);
    setOrderState(true);
  };

  const handledeliveryChange = async () => {
    setOrderState(false);
    const changeData = {
      iorder: thisIorder,
      shipping: parseInt(deliveryState),
    };
    try {
      const data = await postOrderState(changeData);
      const recentData = await getOrderList(recent);
      const KoreanData = recentData.map(item => {
        if (item.shippingStatus === 0) {
          return { ...item, shippingStatus: "배송 준비중" };
        } else if (item.shippingStatus === 1) {
          return { ...item, shippingStatus: "배송 중" };
        } else if (item.shippingStatus === 2) {
          return { ...item, shippingStatus: "배송 완료" };
        } else if (item.shippingStatus === 3) {
          return { ...item, shippingStatus: "배송 취소" };
        }
        return item;
      });
      setOrderList(KoreanData);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCencel = () => {
    setOrderState(false);
  };
  useEffect(() => {
    handleOrderList();
  }, []);
  return (
    <OrderInquiryWrapper>
      <div className="order_inquiry_wrapper">
        <div className="order_inquiry_inner">
          <h1>전체 주문 조회</h1>
          <div className="order_inquiry_top">
            <ul>
              <li>
                <span>주문일</span>
                <span>
                  <button>오늘</button>
                  <button>3일</button>
                  <button>7일</button>
                  <button>1개월</button>
                  <input type="date" onChange={e => handleTodayDate(e)}></input>
                  ~ <input type="date" onChange={e => handleEndDate(e)}></input>
                </span>
                <span></span>
                <span></span>
              </li>
              <li>
                <span>검색어</span>
                <span>
                  <select onChange={e => handleSearchType(e)}>
                    <option>검색유형</option>
                    <option value="0">주문번호</option>
                    <option value="1">주문자명</option>
                    <option value="2">주문자 아이디</option>
                    <option value="3">주문자 휴대전화</option>
                    <option value="4">주문서 이메일</option>
                  </select>
                  <input
                    type="text"
                    className="searchbox"
                    onChange={e => handleText(e)}
                  />
                </span>
              </li>
            </ul>
            <div className="note">
              검색유형을 선택하여 검색할시 반드시 검색창에 검색유형에 맞는
              입력값을 넣어주셔야합니다.
              <br />
              예:주문번호 - 검색값: 01 , 주문자명 - 검색값 : 홍길동
            </div>
            <div>
              <button onClick={handleOrderList}>검색</button>
            </div>
          </div>

          <div className="order_inquiry_bottom">
            <ul>
              <li>
                <span>주문일</span>
                <span>주문번호</span>
                <span>주문자</span>
                <span>총 상품금액</span>
                <span>총 주문금액</span>
                <span>배송상태</span>
                <span>취소</span>
                <span>비고</span>
              </li>
              {orderList.length ? (
                <>
                  {orderList.map((item, index) => (
                    <li key={index} className="parents_list">
                      <div className="list">
                        <span>{item.orderDate}</span>
                        <span>{item.iorder}</span>
                        <span>{item.name}</span>
                        <span>{item.orderPrice}</span>
                        <span>{item.totalPrice}</span>
                        <span>{item.shippingStatus}</span>
                        <span>{item.refundStatus}</span>
                        <span
                          className="changeOrder"
                          onClick={e => handleChange(index, item.iorder)}
                        >
                          주문상태변경
                        </span>
                      </div>

                      {orderState && thisIndex === index ? (
                        <div className="orerChange_box">
                          <span>현재선택한 주문번호</span>
                          <span>{item.iorder}</span>
                          <select
                            onChange={e => setDeliveryState(e.target.value)}
                          >
                            <option value={null}>배송상태 선택</option>
                            <option value={0}>배송 준비중</option>
                            <option value={1}>배송 중</option>
                            <option value={2}>배송 완료</option>
                            <option value={3}>배송 취소</option>
                          </select>
                          <button
                            className="change_btn"
                            onClick={handledeliveryChange}
                          >
                            수정완료
                          </button>
                          <button className="change_btn" onClick={handleCencel}>
                            취소
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </>
              ) : (
                <div className="empty_box">
                  검색한 결과가 없습니다.
                  <br />
                  주문 조회 검색창에서 검색해주세요
                </div>
              )}
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </OrderInquiryWrapper>
  );
};

export default OrderInquiry;
