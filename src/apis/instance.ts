import axios from "axios";
import {getCookie} from "../login.cookie";

export const instance = axios.create({
    baseURL : 'http://localhost:3000',
    headers: {
        Authorization: getCookie("MemberToken") ? `Bearer ${getCookie("MemberToken")}` : null
    }
})
