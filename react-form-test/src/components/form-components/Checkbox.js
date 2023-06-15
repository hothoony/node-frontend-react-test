import { useEffect, useState } from "react";

function Checkbox({options, name, defaultValue, onChange}) {

    const [values, setValues] = useState([]);

    useEffect(() => {
        // setValues(defaultValue);
    }, []);

    useEffect(() => {
        // console.log('values', values);
        onChange(values);
    }, [values]);

    const onCompChange = (e) => {
        const selectedValue = e.target.value;
        if (e.target.checked) {
            setValues(prev => ([
                ...prev,
                selectedValue,
            ]));
        } else {
            setValues(values.filter(o => o != selectedValue));
        }
    };

    return (
        <div>
            <div>
                Checkbox
            </div>
            <div>
                {options && options.map((item, index) => (
                    <label>
                        <input type="checkbox"
                            value={item.value}
                            // checked={values && values.includes(item.value)}
                            onChange={onCompChange}
                        />
                        {item.label}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Checkbox;
