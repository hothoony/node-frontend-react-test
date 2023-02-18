import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const SignIn = (props) => {

    const styles = {
        formLabel: {
            display: 'inline-block',
            width: '50px',
            fontSize: '20px',
        }
    };

    const history = useHistory();
    const params = useParams();

    const onLogin = () => {
        console.log('onLogin');
        
        localStorage.setItem('isLogin', true);
        console.log('localStorage isLogin', localStorage.getItem('isLogin'));

        let findString = '?redirect=';
        let pos = window.location.search.indexOf(findString);
        let redirectUri = window.location.search.slice(findString.length);
        history.push(redirectUri);
    }

    const onLogout = () => {
        console.log('onLogout');
        
        localStorage.setItem('isLogin', false);
        console.log('localStorage isLogin', localStorage.getItem('isLogin'));

        history.push('/');
    }

    return (
        <div>
            <h1>Sign-in/out</h1>
            <div>
                {
                    (!JSON.parse(localStorage.getItem('isLogin'))) ? (
                        <>
                            <div>
                                <span style={styles.formLabel}>ID</span>
                                <input type="text" name="username"/>
                            </div>
                            <div>
                                <span style={styles.formLabel}>PW</span>
                                <input type="password" name="password"/>
                            </div>
                            <div>
                                <button type="submit" onClick={onLogin}>login</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <span>로그인 되었습니다</span>&nbsp;&nbsp;
                                <button type="submit" onClick={onLogout}>logout</button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default SignIn;
