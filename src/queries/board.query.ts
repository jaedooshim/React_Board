/*eslint-disable*/
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {boardApi, boardDeleteApi, boardPostApi, boardPutApi} from "../apis/board.api";
import {ICreateBoard, IUpdateBoard} from "../interfaces/board.interface";

export function useBoardQuery() {
    const queryClient = useQueryClient()
    const get = useQuery({queryKey : ['board'], queryFn : () => boardApi() })
    const post = useMutation({mutationFn : (data : ICreateBoard) => boardPostApi(data), onSuccess : ()=> {
        alert('작성이 완료되었습니다.')
        queryClient.invalidateQueries({queryKey : ['board']})

        }})
    const update = useMutation({mutationFn : (data : IUpdateBoard) => boardPutApi(data), onSuccess : () => {
        queryClient.invalidateQueries({queryKey : ['board']})
        }})
    const remove = useMutation({
        mutationFn: (id: number) => {
            const isConfirmed = window.confirm('게시글을 삭제하시겠습니까?');
            if (!isConfirmed) {
                alert('취소하였습니다.');
            }
            return boardDeleteApi(id);
        },
        onSuccess: () => {
            alert('삭제되었습니다.');
            queryClient.invalidateQueries({queryKey: ['board']})
        },
        onError: (error) => {
            console.log('ERROR', error);
        }
    });
    return {get, post, update, remove}
}