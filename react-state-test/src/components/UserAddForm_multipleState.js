import { useState } from "react";

function UserAddForm_multipleState() {

    // style
    const formItem = {
        display: 'flex',
    };
    const formLabel = {
        display: 'inline-block',
        width: '120px',
        textAlign: 'right',
        marginRight: '10px',
    };

    // 여러 개의 state 를 사용
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    // state change handler
    const onChangeUserId = (e) => {
        setUserId(e.target.value);
    }
    const onChangeUserPw= (e) => {
        setUserPw(e.target.value);
    }
    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangeMobile = (e) => {
        setMobile(e.target.value);
    }

    const onClickReset = (e) => {
        setUserId('');
        setUserPw('');
        setUserName('');
        setEmail('');
        setMobile('');
    }

    const onClickConfirm = (e) => {
        console.log('userId', userId);
        console.log('userPw', userPw);
        console.log('userName', userName);
        console.log('email', email);
        console.log('mobile', mobile);
    }

    return (
        <>
            <div>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>id</span>
                        <input value={userId} onChange={onChangeUserId}/>
                    </label>
                </div>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>Password</span>
                        <input value={userPw} onChange={onChangeUserPw}/>
                    </label>
                </div>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>name</span>
                        <input value={userName} onChange={onChangeUserName}/>
                    </label>
                </div>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>email</span>
                        <input value={email} onChange={onChangeEmail}/>
                    </label>
                </div>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>mobile</span>
                        <input value={mobile} onChange={onChangeMobile}/>
                    </label>
                </div>
                <div>
                    <button onClick={onClickReset}>reset</button>
                    <button onClick={onClickConfirm}>confirm</button>
                </div>
            </div>
        </>
    );
}

export default UserAddForm_multipleState;
