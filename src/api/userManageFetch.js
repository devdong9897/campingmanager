import axios from "axios";

// 모든 유저 리스트 보기
const getUserList = async () => {
  try {
    const res = await axios.get("/api/admin/manage/users");
    const result = res.data;
    console.log("모든 유저 리스트 보기 요청 완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 유저 한명 검색하기
export const getOneUserList = async _query => {
  try {
    const res = await axios.get(`/api/admin/manage/users/user${_query}`);
    const result = res.data;
    // console.log("유저 한명!!! 한명만 들어와!!!");
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export default getUserList;

/*
{
[
  {
    "iuser": 2,
    "user_id": "qwe",
    "name": "장하은",
    "birth_date": "1991-12-16",
    "phone": "01012345678",
    "gender": "1",
    "role": "ROLE_ADMIN"
  },
  {
    "iuser": 3,
    "user_id": "aaa",
    "name": "게임하면 역시~ 트릭컬~",
    "birth_date": "1973-04-27",
    "phone": "1111111111",
    "gender": "0",
    "role": "ROLE_USER"
  },
  {
    "iuser": 4,
    "user_id": "Lambda2",
    "name": "지나가는 객경",
    "birth_date": "2023-09-05",
    "phone": "01022223333",
    "gender": "0",
    "role": "ROLE_USER"
  },
  {
    "iuser": 6,
    "user_id": "asdf",
    "name": "Yoo",
    "birth_date": "2023-09-03",
    "phone": "01012345678",
    "gender": "0",
    "role": "ROLE_USER"
  },
  {
    "iuser": 8,
    "user_id": "STAR",
    "name": "관리자테스트",
    "birth_date": "string",
    "phone": "01022223333",
    "gender": "0",
    "role": "ROLE_ADMIN"
  },
  {
    "iuser": 12,
    "user_id": "rlahfld54",
    "name": "황주은",
    "birth_date": "1998-06-12",
    "phone": "01025521549",
    "gender": "1",
    "role": "ROLE_USER"
  },
  {
    "iuser": 16,
    "user_id": "b",
    "name": "bbb",
    "birth_date": "2023-09-05",
    "phone": "01012345678",
    "gender": "0",
    "role": "ROLE_USER"
  },
  {
    "iuser": 17,
    "user_id": "wjdgh",
    "name": "dfasdf",
    "birth_date": "1998-06-05",
    "phone": "01092158817",
    "gender": "0",
    "role": "ROLE_USER"
  },
  {
    "iuser": 18,
    "user_id": "Lambda3",
    "name": "반동이다",
    "birth_date": "2023-09-24",
    "phone": "01088885555",
    "gender": "0",
    "role": "ROLE_USER"
  },
  {
    "iuser": 19,
    "user_id": "111",
    "name": "신형주",
    "birth_date": "1999-10-10",
    "phone": "01022223333",
    "gender": "0",
    "role": "ROLE_USER"
  }
]
*/