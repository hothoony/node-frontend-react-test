import React from 'react';
import { useRecoilState } from "recoil";
import { loginState } from "../global/state";

const Page02 = () => {

    const [ isLogin, setIsLogin ] = useRecoilState(loginState);

    return (
        <div>
            <h1>Page02</h1>
            <div>
                isLogin = {isLogin}
            </div>
        </div>
    );
}

export default Page02;
