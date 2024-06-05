import {IMemberCreate} from "../interfaces/member.interface";
import {instance} from "./instance";


export async function postMemberApi ({email,password,phoneNumber,nickname} : IMemberCreate) {
    const {data} = await instance.post('members', {email,password,phoneNumber,nickname})
    return data
}
