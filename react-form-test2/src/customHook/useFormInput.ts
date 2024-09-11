import { useState } from "react";

export default function useFormInput(defaultVaue: string, validationFunc: Function) {
    
    const [value, setValue] = useState(defaultVaue);
    const valueIsValid = validationFunc(value);

    function handleChange(event: React.FormEvent) {
        // console.log('event.target type', typeof event.target); // object
        
        if (event.target instanceof HTMLInputElement) {
            console.log('event.target is instance of HTMLInputElement');
            const formElement = event.target as HTMLInputElement;
            console.log('formElement.value', formElement.value);
            setValue(formElement.value);
            return;
        }

        throw new Error('[ERROR] event.target type error');
    }

    return {
        value,
        handleChange,
        hasError: !valueIsValid,
    };
}
