import { useState } from "react";

export default function useInput(defaultVaue: null, validationFunc: Function) {
    
    const [value, setValue] = useState(defaultVaue);
    const valueIsValid = validationFunc(value);

    function handleChange(event: React.FormEvent) {
        if (event.target instanceof HTMLFormElement) {
            setValue(event.target.value);
        }
    }

    return {
        value,
        handleChange,
        hasError: !valueIsValid,
    };
}
