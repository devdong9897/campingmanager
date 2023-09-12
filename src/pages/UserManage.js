import React, { useEffect, useState } from "react";
import { UserWrapper } from "../css/usermanage-style";
import getUserList, { getOneUserList } from "../api/userManageFetch";

const UserManage = () => {
  const [userList, setUserList] = useState([])
  const [oneUserList, setOneUserList] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  // 모든 유저 리스트 보기
  const AllUserListData = async () => {
    try {
      const data = await getUserList()
      console.log("데이터 들어오나",data)
      setUserList(data)
    }catch(err){
      console.log(err)
    }
  }

  const handleClickShow = () => {
    setIsOpen(true)
  }

  // 유저 한명 리스트 보기
  const OneUserListData = async () => {
    try {
      const data = await getOneUserList()
      console.log("준비됐어 데이터?", data)
      setOneUserList(data)
    }catch(err){
      console.log(err)
    }
  }

  // 모든 유저 리스트 호출
  useEffect(() => {
    AllUserListData()
    OneUserListData()
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
              <button onClick={handleClickShow}>검색</button>
            </div>
          
          <div className="user_list_bottom">
            <h1>회원 목록</h1>
            <div className="user_list_bottom_inner">
              <ul>
                <li>
                  <span>아이디</span>
                  <span>닉네임</span>
                  <span>생년월일</span>
                  <span>휴대전화</span>
                  <span>성별</span>
                  <span>유저형태</span>
                </li>
                {userList.map((item, index) => (
                  <li key={index}>
                    {/* onClick={e => onClickHandleUser} */}
                    <span>{item.user_id}</span>
                    <span>{item.name}</span>
                    <span>{item.birth_date}</span>
                    <span>{item.phone}</span>
                    <span>{item.gender === "0" ? ("남자"):("여자")}</span>
                    <span>{item.role}</span>
                  </li>
                ))}
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </UserWrapper>
  );
};

export default UserManage;