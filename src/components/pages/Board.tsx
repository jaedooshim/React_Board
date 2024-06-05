/*eslint-disable*/
import React, {useEffect, useState} from "react";
import { useBoardQuery } from "../../queries/board.query";
import {IUpdateBoard} from "../../interfaces/board.interface";

function Board() {
    /** React-Query */
    const { get, post, update, remove } = useBoardQuery();

    /** useState */
    const [text, setText] = useState<{ title: string; description: string }>({
        title: '',
        description: ''
    });

    /** useEffect */
    useEffect(()=> {
        if (post.isSuccess) {
            setText({title : '', description : ''})
        }
    }, [post.isSuccess])

    /** Functions */
    function create() {
        post.mutate(text);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setText(e => ({ ...e, [name]: value }));
    }

    function findMany() {
        return get.data?.map((data: { id: number, title: string, description: string, Member : {nickname : string} }) => (
            <div key={data.id} className="post p-4 bg-white rounded-lg shadow-md flex flex-col">
                <p className='text-left'>닉네임 : {data.Member.nickname}</p>
                <h3 className="text-lg font-semibold text-left text-gray-800">제목 : {data.title}</h3>
                <p className="text-sm text-gray-600 text-left">내용 : {data.description}</p>
                <div className='flex justify-end space-x-3 mt-auto'>
                    <button
                        className='bg-blue-400 text-white py-1.5 rounded-lg hover:bg-blue-500 transition duration-300 active:bg-blue-600 shadow-xl px-6'
                        onClick={() => modify(data)}
                    >수정
                    </button>
                    <button className='bg-red-400 text-white py-1.5 rounded-lg hover:bg-red-500 transition duration-300 active:bg-red-600 shadow-xl px-6'
                            onClick={()=> deletion(data.id)}
                    >삭제
                    </button>
                </div>
            </div>
        ));
    }

    function modify(data : IUpdateBoard) {
        const updateTitle = prompt('수정할 제목을 입력해주세요.', data.title)
        const updateDesc = prompt('수정할 내용을 입력해주세요.', data.description)
        if(!updateTitle || !updateDesc) {
            alert('빈 텍스트는 입력할 수 없습니다. \n다시 한번 확인해주세요!')
        } else if (updateTitle && updateDesc) {
            update.mutate({id : data.id, title : updateTitle, description : updateDesc})
        }
    }

    function deletion(id : number) {
        remove.mutate(id)
    }

    return (
        <div className='mt-3'>
            <div className='mt-3'>
                <label htmlFor="title" className='px-3 py-2 rounded-lg'>제목 : </label>
                <input value={text.title} onChange={handleChange} type="text" id="title" name="title" placeholder='제목을 입력해주세요.' className='border-2 rounded-lg' />
            </div>

            <div>
                <label htmlFor="desc" className='px-3 py-2 rounded-lg'>설명 : </label>
                <input value={text.description} onChange={handleChange} type="text" id="description"  placeholder='내용을 입력해주세요.' name="description" className='border-2 rounded-lg' />
            </div>
            <button
                className='bg-blue-400 text-white text-sm py-1.5 px-4 rounded-lg hover:bg-blue-500 transition duration-300 active:bg-blue-600 shadow-xl mt-3'
                onClick={create}
            >작성하기</button>
            <div className="flex flex-col bg-amber-200 p-5 gap-3.5 mt-2.5">
                <p className="bg-gray-400 text-white py-2 rounded-lg transition duration-300 text-center">게시글 목록</p>
                <div className="space-y-4">
                    {findMany()}
                </div>
            </div>
        </div>
    );
}

export default Board;
