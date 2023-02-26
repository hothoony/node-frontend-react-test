import React, { useCallback, useEffect, useState } from "react";

const ToggleButton = ({ value, on, toggle }) => {
    console.log('ToggleButton', { value, on });
    return (
        <button onClick={toggle}>
            {value} {on ? 'ON' : 'OFF'}
        </button>
    );
}

const Test02_using_UseEffect = () => {

    const [ isPhoneAgree, setIsPhoneAgree ] = useState(false);
    const [ isEmailAgree, setIsEmailAgree ] = useState(false);

    const onClickPhoneAgree = useCallback(() => {
        setIsPhoneAgree(!isPhoneAgree);
    }, [isPhoneAgree]);

    const onClickEmailAgree = useCallback(() => {
        setIsEmailAgree(!isEmailAgree);
    }, [isEmailAgree]);

    return (
        <div>
            <h3>Test02_using_UseEffect</h3>
            <div>isPhoneAgree = {String(isPhoneAgree)}</div>
            <div>isEmailAgree = {String(isEmailAgree)}</div>
            <ToggleButton value='isPhoneAgree' on={isPhoneAgree} toggle={onClickPhoneAgree}>isPhoneAgree toggle</ToggleButton>
            <ToggleButton value='isEmailAgree' on={isEmailAgree} toggle={onClickEmailAgree}>isEmailAgree toggle</ToggleButton>
        </div>
    );
}

export default Test02_using_UseEffect;
