/*eslint-disable*/
import {useMutation} from "@tanstack/react-query";
import {ILogin} from "../interfaces/login.interface";
import {loginApi} from "../apis/login.api";
import {setCookie} from "../login.cookie";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";

export function UseLoginQuery() {
    const navigate = useNavigate()

    const post = useMutation({mutationFn : (data : ILogin) => loginApi(data),
        onSuccess : (data)=> {
            setCookie('MemberToken', data)
            navigate('/')
        },
        onError: (error: AxiosError<{message: string}>) => {
            alert(error?.response?.data?.message)
        }
    })
    return {post}
}