import React, {useEffect, useState} from "react";
import {useMemberQuery} from "../../queries/member.query";
import {IMemberCreate} from "../../interfaces/member.interface";
import {useNavigate} from "react-router-dom";

function Signup() {

    /** React-Query */
    const {post} = useMemberQuery()
    const navigate = useNavigate()
    /** Use-State */
    const [member, setMember] = useState<IMemberCreate>
    ({nickname: '', email : '', password : '', phoneNumber : ''})

    /** Use-Effect */
    useEffect(()=> {
        if (post.isSuccess) {
            navigate('/')
        }
    }, [post.isSuccess,navigate])

    /** Functions */
    function create() {
        post.mutate(member)
    }

    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setMember(e => ({...e, [name] : value}))
    }

    return (
        <div className={'bg-gray-50 flex h-screen justify-center items-center'}>
            <div className={'w-4/12 h-90 bg-white flex flex-col gap-3 rounded-lg shadow-lg p-5'}>
                <p className={'text-2xl font-bold text-gray-700 text-center'}>회원가입</p>
                <div className={'flex-col flex gap-3 py-5'}>
                    <input  name='email' value={member.email} onChange={handleChange} type={'text'} className={'px-3 py-2 rounded-lg border'} placeholder={'Email'}/>
                    <input  name='password' value={member.password} onChange={handleChange} type={'password'} className={'px-3 py-2 rounded-lg border'} placeholder={'Password'}/>
                    <input  name='phoneNumber' value={member.phoneNumber} onChange={handleChange} type={'text'} className={'border-2 px-3 py-2 rounded-lg'} placeholder={'Phone'} />
                    <input  name='nickname' value={member.nickname} onChange={handleChange} type={'text'} className={'px-3 py-2 rounded-lg border'} placeholder={'NickName'} />
                </div>
                <button
                    onClick={create}
                    className={'bg-blue-400 text-white text-sm py-1.5 rounded-lg hover:bg-blue-500 transition duration-300 active:bg-blue-600 shadow-xl'}
                >회원가입</button>
            </div>
        </div>
    )
}

export default Signup