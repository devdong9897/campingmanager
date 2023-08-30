import React from "react";
import { ClientWrapper } from "../css/client-manage-style";

const ClientManage = () => {
  // const [clientList, setClientList] = useState()
  return (
    <ClientWrapper>
      <div className="client_wrapper">
        <div className="client_inner">
          <h1>회원 조회</h1>
          <div className="client_list_top">
            <p>회원 정보조회</p>
            <ul>
              <li>
                <span>이름</span>
                <span></span>
                <span>성별</span>
                <span>
                  <input type="radio" />
                  남자
                  <input type="radio" />
                  여자
                </span>
              </li>
              <li>
                <span>유저</span>
                <span></span>
              </li>
              <li>
                <span>전화번호</span>
                <span></span>
              </li>
            </ul>

            <div className="client_top_button">
              <button>검색</button>
            </div>
          </div>

          <h1>회원 목록</h1>
          <div className="client_list_bottom">
            <ul>
              <li>
                <span>이름</span>
                <span>성별</span>
                <span>생일</span>
                <span>휴대전화</span>
                <span>Email</span>
                <span>주소</span>
                <span>상세주소</span>
              </li>
              <li>
                <span>a</span>
                <span>b</span>
                <span>c</span>
                <span>d</span>
                <span>e</span>
                <span>f</span>
                <span>g</span>
              </li>
            </ul>
            <div className="client_bottom_button">
              <button>검색</button>
            </div>
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
};

export default ClientManage;
