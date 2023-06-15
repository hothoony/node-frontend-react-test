import { useState } from "react";

function Radio({options, onChange, defaultValue, name}) {

    const [value, setValue] = useState([]);

    const onCompChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }

    return (
        <div>

            {options && options.map((item, index) => (
                <label>
                    <input type="radio" name={name} value={item.value}
                        onChange={onCompChange}
                    />
                    <span>{item.label}</span>
                </label>
            ))}

        </div>
    );
}

export default Radio;