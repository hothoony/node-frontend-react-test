import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from '../redux/actions/loginOutAction';

const LoginForm = () => {

    const formData = {
        username: '',
        password: '',
    };

    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log('handleChange', e.target.name, e.target.value, e);
        switch (e.target.name) {
            case 'id':
                formData.username = e.target.value;
                break;
            case 'pw':
                formData.password = e.target.value;
                break;
            default:
                break;
        }
    }

    const handleLogin = (e) => {
        console.log('');
        console.log('handleLogin', e.target.name, e);
        console.log('formData', formData);
        dispatch(login({
            isLogin: true,
            ...formData,
        }));
    }

    const handleLogout = (e) => {
        console.log('');
        console.log('handleLogout', e.target.name, e);
        console.log('formData', formData);
        dispatch(logout());
    }

    return (
        <div>
            <h2>LoginForm</h2>
            <div>
                <label>
                    <span>ID</span>
                    <input name="id" onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    <span>PW</span>
                    <input name="pw" onChange={handleChange} type="password"/>
                </label>
            </div>
            <div>
                <button onClick={handleLogin}>로그인</button>
                <button onClick={handleLogout}>로그아웃</button>
            </div>
        </div>
    );
}

export default LoginForm;
