import { useState } from 'react';

const Test_useState = () => {

    const [ name, setName ] = useState('james');

    const handleChange = () => {
        setName('steve');
    }

    return (
        <div>
            <h2>Test_useState</h2>
            <p>{ name }</p>
            <button onClick={() => handleChange()}>change state</button>
        </div>
    );
}
 
export default Test_useState;
