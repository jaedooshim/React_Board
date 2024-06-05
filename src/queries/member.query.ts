import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IMemberCreate} from "../interfaces/member.interface";
import {postMemberApi} from "../apis/member.api";

export function useMemberQuery() {
    const queryClient = useQueryClient()
    const post = useMutation({mutationFn : (data : IMemberCreate) => postMemberApi(data),
        onSuccess : () => {
        queryClient.invalidateQueries({queryKey : ['member']})
        },
        onError : (error : any) => {
        // console.log('err', error)
            if (error.response) {
                alert(error.response.data.message)
            }
        }
    })
    return {post}
}