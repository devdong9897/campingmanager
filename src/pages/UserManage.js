import React from "react";
import { UserWrapper } from "../css/usermanage-style";

const UserManage = () => {
  // const [clientList, setClientList] = useState()
  return (
    <UserWrapper>
      <div className="user_wrapper">
        <div className="user_inner">
          <h1>회원 조회</h1>
          <div className="user_list_top">
            <ul>
              <li>
                <span>이름</span>
                <span>
                  <input type="text" className="user_box"/>
                </span>
                <span>성별</span>
                <span>
                  <input type="radio" />
                  남자
                  <input type="radio" />
                  여자
                </span>
              </li>
              <li>
                <span>유저 아이디</span>
                <span>
                  <input type="text" className="user_box"/>
                </span>
              </li>
              <li>
                <span>전화번호</span>
                <span>
                  <input type="text" className="user_box"/>
                </span>
              </li>
            </ul>

            <div className="user_top_button">
              <button>검색</button>
            </div>
          </div>

          <h1>회원 목록</h1>
          <div className="user_list_bottom">
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
            <div className="user_bottom_button">
              <button>검색</button>
            </div>
          </div>
        </div>
      </div>
    </UserWrapper>
  );
};

export default UserManage;