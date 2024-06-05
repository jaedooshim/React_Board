import React, {useState} from "react";
import {UseLoginQuery} from "../../queries/login.query";
import {ILogin} from "../../interfaces/login.interface";

function Login() {
    /** React-Query */
    const { post }= UseLoginQuery()

    /** Use-State */
    const [login, setLogin] = useState<ILogin>({email : '', password : ''})
    /** Use-Effect */


    /** Functions */
    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setLogin(e => ({...e, [name] : value}))
    }

    function create() {
        post.mutate(login)
    }

    return (
        <div className={'bg-gray-50 flex h-screen justify-center items-center'}>
        <div className={'w-4/12 h-85 bg-white flex flex-col gap-3 rounded-lg shadow-lg p-5'}>
        <p className={'text-2xl font-bold text-gray-700 text-center'}>로그인</p>
            <div className={'flex-col flex gap-3 py-5'}>
    <input  name='email' value={login.email} onChange={handleChange} type={'text'} className={'border-2 px-3 py-2 rounded-lg'} placeholder={'Email'} />
    <input  name='password' value={login.password} onChange={handleChange} type={'password'} className={'px-3 py-2 rounded-lg border'} placeholder={'Password'} />
    </div>
    <button
        className={'bg-blue-400 text-white text-sm py-1.5 rounded-lg hover:bg-blue-500 transition duration-300 active:bg-blue-600 shadow-xl'}
        onClick={create}
    >로그인</button>
        </div>
        </div>
    )
}

export default Login