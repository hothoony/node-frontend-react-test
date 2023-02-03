import { useState } from "react";

function MultipleInput() {

    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        // 새로운 객체를 만들어서 값을 바꾼다
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    };

    const onCheckState = () => {
        console.log('');
        console.log('name', name);
        console.log('nickname', nickname);
        console.log('inputs', inputs);
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <button onClick={onCheckState}>값 확인</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default MultipleInput;
