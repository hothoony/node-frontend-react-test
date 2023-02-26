import { useEffect, useRef, useState } from "react";

const MyComp01 = () => {

    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');
    const [ gender, setGender ] = useState('');

    const prevNameRef = useRef();


    useEffect(() => {
        console.log('useEffect 렌더링될 때 마다');
    });

    useEffect(() => {
        console.log('useEffect []');
    }, []);

    useEffect(() => {
        console.log('useEffect [name_변경됨]');
        prevNameRef.current = name;
    }, [name]);

    useEffect(() => {
        console.log('useEffect [age_변경됨]');
    }, [age]);

    useEffect(() => {
        console.log('useEffect [name_변경됨 or age_변경됨]');
        console.log('name', name);
        console.log('age', age);
    }, [name, age]);


    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    const onChangeGender = (e) => {
        setGender(e.target.value);
    }


    return (
        <div>
            <h2>MyComp01</h2>
            <div>prevName = {prevNameRef.current}</div>
            <div>name = {name}</div>
            <div>age = {age}</div>
            <div>gender = {gender}</div>
            <div>
                <input type="text" value={name} onChange={onChangeName} placeholder='name'/>
            </div>
            <div>
                <input type="text" value={age} onChange={onChangeAge} placeholder='age'/>
            </div>
            <div>
                <input type="text" value={gender} onChange={onChangeGender} placeholder='gender'/>
            </div>
        </div>
    );
}

export default MyComp01;
