import { useEffect, useState } from "react";

const StateTest01 = () => {

    console.log('StateTest01');


    const formLabel = {
        display: 'inline-block',
        width: '150px',
        textAlign: 'right',
        marginRight: '10px',
    };


    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');


    useEffect(() => {
        console.log('## useEffect name, age => changed', name, age);
    }, [name, age]);

    useEffect(() => {
        console.log('## useEffect nmae => changed', name);
    }, [name]);

    useEffect(() => {
        console.log('## useEffect age => changed', age);
    }, [age]);


    const onChangeName = (e) => {
        console.log('');
        console.log('## onChangeName');
        console.log('name', name); // 변경 전에 state 를 먼저 출력하고
        setName(e.target.value);   // 여기서 state 를 변경하지만
        console.log('name', name); // 여기서는 변경된 state 가 확인되지 않는다
    }

    const onChangeAge = (e) => {
        console.log('');
        console.log('## onChangeAge');
        console.log('age', age); // 변경 전에 state 를 먼저 출력하고
        setAge(e.target.value);  // 여기서 state 를 변경하지만
        console.log('age', age); // 여기서는 변경된 state 가 확인되지 않는다
    }

    const checkState = () => {
        console.log('');
        console.log('checkState');
        console.log('name', name);
        console.log('age', age);
    }


    return (
        <>
            <div>
                <h3>StateTest01</h3>
                <div>
                    <i>
                        state 가 변할때 useEffect 가 호출되는 순서는<br/>
                        useEffect 가 소스코드 상에서 선언된 순서대로 실행된다
                    </i>
                </div>
                <div>
                    <label>
                        <span style={formLabel}>name</span>
                        <input type="text" value={name} onChange={onChangeName}/>
                    </label>
                </div>
                <div>
                    <label>
                        <span style={formLabel}>age</span>
                        <input type="text" value={age} onChange={onChangeAge}/>
                    </label>
                </div>
            </div>
            <div>
                <button onClick={checkState}>check state</button>
            </div>
        </>
    );
}

export default StateTest01;
