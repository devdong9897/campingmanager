import axios from 'axios'

// 아이템 상세이미지 업로드
const ItemDetailImage = async () => {
    try {
        const res = await axios.post("/api/admin/item/detail-pic")
        const data = res.data
        console.log("아이템 상세이미지 요청 완료")
        return data
    }catch(err) {
        console.log(err)
    }
    return {}
}

// 아이템 추가
const itemAdd = async iitem => {
    const res = await axios.post(`/api/admin/item`,iitem)
    console.log("아이템 추가 요청 완료")
    return res.data;
}

// 아이템 수정
const itemEdit = async iitem => {
    try {
        const res = await axios.put(`/api/admin/item/${iitem}`)
        console.log("아이템 수정 요청 완료")
        return res.data
    }catch(err) {
        console.log(err)
    }
    return {}
}

// 아이템 삭제
const itemDelete = async iitem => {
    try {
    const res = await axios.delete(`/api/admin/item${iitem}`)
    const result = res.data;
    console.log("아이템 삭제 요청",result)
    }catch(err){
        console.log(err)
    } 
}

// 추천 아이템 추가

// 아이템 개별 검색

// 아이템 검색 리스트
const getItemSearch = async () => {
    try {
        const res = await axios.get("/api/admin/item/search")
        const result = res.data
        console.log("아이템 검색 요청 완료",result)
        return result
    }catch(err) {
        console.log(err)
    }
    return {}
}

export {
    ItemDetailImage,
    itemAdd,
    itemEdit,
    itemDelete,
    getItemSearch
}