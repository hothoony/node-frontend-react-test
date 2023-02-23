import { useEffect, useState } from "react";

const StateTest02 = () => {

    const formLabel = {
        display: 'inline-block',
        width: '150px',
        textAlign: 'right',
        marginRight: '10px',
    };

    const [ formData, setFormData ] = useState({});
    const [ isSaveClick, setIsSaveClick ] = useState(false);

    useEffect(() => {
        console.log('## useEffect formData changed', formData);
    }, [formData]);

    useEffect(() => {
        console.log('## useEffect isSaveClick changed', isSaveClick);
        if (isSaveClick) {
            saveToServer();
            setIsSaveClick(false);
        }
    }, [isSaveClick]);

    const onChangeUsername = (e) => {
        console.log('## onChangeUsername', e.target.value);
        setFormData((prevState) => ({
            ...prevState,
            username: e.target.value,
        }));
    }

    const onChangePassword = (e) => {
        console.log('## onChangePassword', e.target.value);
        setFormData((prevState) => ({
            ...prevState,
            password: e.target.value,
        }));
    }

    const checkState = () => {
        console.log('## checkState', 'formData', formData);
    }

    // state 를 변경하고 서버로 전송
    const onPreSave = () => {

        console.log('BEFORE formData', formData);
        setFormData((prevState) => ({
            ...prevState,
            username: 'PAUL username changed',
        }));
        console.log('formData changed');
        console.log('AFTER  formData', formData);
    }

    const onPreSave1 = () => {
        console.log('');
        console.log('## onPreSave1');

        onPreSave();
        
        // state 변경후 바로 서버로 전송하면 변경전 state 가 전송된다
        saveToServer();
    }

    const onPreSave2 = () => {
        console.log('');
        console.log('## onPreSave2');

        onPreSave();
        
        // 버튼 클릭 여부를 useEffect 로 감지해서 
        // 버튼을 클릭했을때만 서버로 전송하도록 해준다
        setIsSaveClick(true);
    }

    // 서버로 전송
    const onSave = () => {
        console.log('');
        console.log('## onSave');
        console.log('formData', formData);
        saveToServer();
    }

    const saveToServer = () => {
        console.log('==> 서버로 전송 formData', formData);
    }

    return (
        <>
            <div>
                <h2>StateTest02</h2>
                <div>
                    <label>
                        <span style={formLabel}>username</span>
                        <input type="text" value={formData.username} onChange={onChangeUsername}/>
                    </label>
                </div>
                <div>
                    <label>
                        <span style={formLabel}>password</span>
                        <input type="text" value={formData.password} onChange={onChangePassword}/>
                    </label>
                </div>
            </div>
            <div>
                <button onClick={checkState}>check state</button>
            </div>
            <div>
                <button onClick={onPreSave1}>preSave1 (state 를 변경하고 서버로 전송)</button>
            </div>
            <div>
                <button onClick={onPreSave2}>preSave2 (state 를 변경하고 서버로 전송, useEffect 사용)</button>
            </div>
            <div>
                <button onClick={onSave}>Save (state 를 변경하지 않고 서버로 전송)</button>
            </div>
        </>
    );
}

export default StateTest02;
