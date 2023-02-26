import { useEffect, useState } from "react";

const MyComp01 = () => {

    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');
    const [ gender, setGender ] = useState('');


    useEffect(() => {
        console.log('useEffect');
    });

    useEffect(() => {
        console.log('useEffect []');
    }, []);

    useEffect(() => {
        console.log('useEffect [name]');
    }, [name]);

    useEffect(() => {
        console.log('useEffect [age]');
    }, [age]);

    useEffect(() => {
        console.log('useEffect [name, age]');
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
            MyComp01
            <div>name = {name}</div>
            <div>age = {age}</div>
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
