import { useState } from 'react';

const TestState = () => {

    const [name, setName] = useState('james');
    const [age, setAge] = useState(10);

    const handleClickName = () => {
        setName('steve');
    }

    const handleClickAge = () => {
        setAge(20);
    }

    return (
        <div className="testState">
            <h2>TestState</h2>
            <p>My name is { name }</p>
            <p>My age is { age }</p>
            <button onClick={ handleClickName }>change name</button>
            <button onClick={ handleClickAge }>change age</button>
        </div>
    );
}
 
export default TestState;