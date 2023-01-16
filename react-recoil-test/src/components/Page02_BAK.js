import React from 'react';

import { useRecoilState, useRecoilValue } from "recoil";
import loginState from "../global/LoginRecoilState";

class Page02_BAK extends React.Component {

    // const [ isLogin, setIsLogin ] = useRecoilState(loginState);
    isLogin = useRecoilValue(loginState);

    render() {
        return (
            <div>
                <h1>Page02 11</h1>
                <div>
                    isLogin = {this.isLogin}
                </div>
            </div>
        );
    }
}

export default Page02_BAK;
