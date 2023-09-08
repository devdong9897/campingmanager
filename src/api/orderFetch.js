import axios from 'axios'// 모든 유저 리스트 보기

// 전체 주문 조회 검색
const getOrderList = async () => {
    try {
        const requestData = {
            startDate:'20230906',
            endDate:'20230907',
        }
        const res = await axios.get("/api/admin/order", {params:requestData})
        const result = res.data;
        console.log("전체 주문 조회 요청 완료",result)
        // console.log(result)
        return result;
    }catch (err){
        console.log(err)
    }
    return []
}

// 환불 관리 검색
export const getOrderRefund = async () => {
    try {
        const params = {
            startDate:'20230906',
            endDate:'20230907'
        }
        const res = await axios.get(`/api/admin/refund`,{params:params})
        console.log("환불관리 요청 데이터")
        return res.data
    }catch(err) {
        console.log(err)
    }
    return []
}
export default {getOrderList,getOrderRefund }