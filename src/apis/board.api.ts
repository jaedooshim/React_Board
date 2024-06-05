import {instance} from "./instance";
import {ICreateBoard, IUpdateBoard} from "../interfaces/board.interface";

export async function boardApi() {
    const {data} = await instance.get('publish')
    return data
}

export async function boardPostApi({title, description} : ICreateBoard) {
    const {data} = await instance.post('publish', {title,description})
    return data
}

export async function boardPutApi({id, title , description} : IUpdateBoard) {
    const {data} = await instance.put(`publish/${id}`, {title, description})
    return data
}

export async function boardDeleteApi (id : number) {
    // console.log('첫번 째 아이디', id)
    try {
        const {data} = await instance.delete(`publish/${id}`)
        // console.log('두 번째 응답값', data)
        return data
    } catch (error) {
        console.error('삭제요청 에러', error)
        throw error
    }

}