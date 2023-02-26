import { useState } from "react";
import usePrevious from "./usePrevious";

const Demo_usePrevious = () => {

    const [ count, setCount ] = useState(0);
    const prevCount = usePrevious(count);

    const onCountUp = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <he>Demo_usePrevious</he>
            <div>count = {count}</div>
            <div>prevCount = {prevCount}</div>
            <div>
                <button onClick={onCountUp}>count up</button>
            </div>
        </div>
    );
}
export default Demo_usePrevious;
