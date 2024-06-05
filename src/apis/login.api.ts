import {ILogin} from "../interfaces/login.interface";
import {instance} from "./instance";

export async function loginApi({email,password} : ILogin) {
    const {data} = await instance.post('auth', {email,password})
    return data
}
