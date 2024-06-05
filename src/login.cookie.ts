import {Cookies} from "react-cookie";

const cookies = new Cookies()
export const setCookie = (name : string, value : string) => {
    console.log('value', value)
    return cookies.set(name,value, {maxAge : 60 * 60 * 3, path : '/'})
}

// 쿠키 조회
export const getCookie = (name : string) => {
    // console.log('NAME', name)
    return cookies.get(name)
}
// // 쿠키 삭제
// export const removeCookie = () => {
//
// }