import React from 'react';
import { useHistory } from "react-router-dom";

const LoginInfo = () => {

    const history = useHistory();

    const onLogout = () => {
        console.log('onLogout');
        
        localStorage.setItem('isLogin', false);
        console.log('localStorage isLogin', localStorage.getItem('isLogin'));

        history.push('/');
    }

    return (
        <div>
            {
                (JSON.parse(localStorage.getItem('isLogin')))
                ? (
                    <>
                        <div>
                            <span>로그인 되었습니다</span>&nbsp;&nbsp;
                            <button type="submit" onClick={onLogout}>logout</button>
                        </div>
                    </>
                )
                : ('')
            }
        </div>
    );
}

export default LoginInfo;
