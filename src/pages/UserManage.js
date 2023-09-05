import React, { useEffect, useState } from "react";
import { UserWrapper } from "../css/usermanage-style";
import getUserList from "../api/userManageFetch";

const UserManage = () => {
  const [userList, setUserList] = useState([])
  // const [clientList, setClientList] = useState()

  // 모든 유저 리스트 보기
  const AllUserListData = async () => {
    try {
      const data = await getUserList()
      console.log("데이터 들어오나",data)
      setUserList(data.userList.list)
    }catch(err){
      console.log(err)
    }
  }

  // 모든 유저 리스트 호출
  useEffect(() => {
    AllUserListData()
  },[])

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
                  <input type="radio" name="userradio" />
                  남자
                  <input type="radio" name="userradio" />
                  여자
                </span>
              </li>
              <li>
                <span>유저 아이디</span>
                <span>
                  <input type="text"/>
                </span>
              </li>
              <li>
                <span>전화번호</span>
                <span>
                  <input type="text"/>
                </span>
              </li>
            </ul>
          </div>
            <div className="user_top_button">
              <button>검색</button>
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
              {userList.map((item, index) => (
                <li key={index}>
                  {/* onClick={e => onClickHandleUser} */}
                  <span>{item.user_id}</span>
                  <span>{item.name}</span>
                  <span>{item.birth_date}</span>
                  <span>{item.phone}</span>
                  <span>{item.gender}</span>
                  <span>{item.role}</span>
                  <span>g</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </UserWrapper>
  );
};

export default UserManage;