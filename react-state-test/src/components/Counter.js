import { useState } from "react";

function Counter() {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // setNumber(number + 1);                   // 값을 전달해서 변경
        setNumber(prevNumber => prevNumber + 1); // 업데이트 함수를 전달해서 변경
    }

    const onDecrease = () => {
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
