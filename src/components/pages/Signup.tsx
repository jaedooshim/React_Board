import React from "react";

function SignUp() {
    return (
        <div className={'bg-gray-50 flex h-screen justify-center items-center'}>
            <div className={'w-4/12 h-90 bg-white flex flex-col gap-3 rounded-lg shadow-lg p-5'}>
                <p className={'text-2xl font-bold text-gray-700 text-center'}>회원가입</p>
                <div className={'flex-col flex gap-3 py-5'}>
                    <input  type={'text'} className={'border-2 px-3 py-2 rounded-lg'} placeholder={'Name'} />
                    <input  type={'text'} className={'px-3 py-2 rounded-lg border'} placeholder={'NickName'} />
                    <input  type={'text'} className={'px-3 py-2 rounded-lg border'} placeholder={'Email'}/>
                    <input  type={'text'} className={'px-3 py-2 rounded-lg border'} placeholder={'Address'} />
                    <input  type={'password'} className={'px-3 py-2 rounded-lg border'} placeholder={'Password'}/>
                </div>
                <button className={'bg-blue-400 text-white text-sm py-1.5 rounded-lg hover:bg-blue-500 transition duration-300 active:bg-blue-600 shadow-xl'}>회원가입</button>
            </div>
        </div>
    )
}

export default SignUp