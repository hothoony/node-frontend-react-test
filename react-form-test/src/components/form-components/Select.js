function Select({ options, onChange }) {

    const onCompChange = (e) => {
        console.log(e.target.value);
        onChange(e.target.value);
    }

    return (
        <div>

            <select onChange={onCompChange}>
                {options && options.map((item, index) => (
                    <option value={item.value}>{item.label}</option>
                ))}
            </select>

        </div>
    );
}

export default Select;
