import { useState } from "react";

function UserAddForm_singleState() {

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

    // 한 개의 state 를 사용
    const [userParam, setUserParam] = useState({
        userId: '',
        userPw: '',
        userName: '',
        email: '',
        mobile: '',
    });

    const { userId, userPw } = userParam;

    // state change handler
    const onChangeParam = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserParam(prevParam => {
            return {
                ...prevParam,
                [name]: value,
            };
        });
    }

    const onClickReset = (e) => {
        setUserParam(prevParam => {
            return {
                ...prevParam,
                userId: '',
                userPw: '',
                userName: '',
                email: '',
                mobile: '',
            };
        });
    }

    const onClickConfirm = (e) => {
        console.log('userParam', userParam);
    }

    return (
        <>
            <div>
                <h2>single state</h2>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>id</span>
                        <input name='userId' value={userId} onChange={onChangeParam}/>
                    </label>
                </div>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>Password</span>
                        <input name='userPw' value={userPw} onChange={onChangeParam}/>
                    </label>
                </div>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>name</span>
                        <input name='userName' value={userParam.userName} onChange={onChangeParam}/>
                    </label>
                </div>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>email</span>
                        <input name='email' value={userParam.email} onChange={onChangeParam}/>
                    </label>
                </div>
                <div>
                    <label style={formItem}>
                        <span style={formLabel}>mobile</span>
                        <input name='mobile' value={userParam.mobile} onChange={onChangeParam}/>
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

export default UserAddForm_singleState;
