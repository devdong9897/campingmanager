import axios from "axios"

// 모든 유저 리스트 보기
const getUserList = async () => {
    try {
        const res = await axios.get("/api/admin/manage/users")
        const result = res.data;
        console.log("모든 유저 리스트 보기 요청 완료")
        console.log(result)
        return result;
    }catch (err){
        console.log(err)
    }
    return []
}
export default getUserList