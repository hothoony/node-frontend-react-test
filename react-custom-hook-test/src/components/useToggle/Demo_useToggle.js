import React from "react";
import useToggle from "./useToggle";

const Demo_useToggle = () => {

    const [value, toggleValue] = useToggle(false);

    return (
        <div>
            <h3>useToggle</h3>
            <div>value = {value.toString()}</div>
            <button onClick={toggleValue}>toggle</button>
            <button onClick={() => toggleValue(true)}>set true</button>
            <button onClick={() => toggleValue(false)}>set false</button>
        </div>
    );
}

export default Demo_useToggle;
