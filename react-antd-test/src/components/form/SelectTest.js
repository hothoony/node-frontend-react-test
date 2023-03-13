import { Button, Select } from "antd";
import { useState, useEffect } from "react";

const SelectTest = () => {

    const [listSize, setListSize] = useState('20');
    const [selectedText, setSelectedText] = useState('');

    // useEffect(() => {
    //     setListSize(20);
    // }, []);

    const handleChange = (e) => {
        console.log('handleChange', e);
        setListSize(e);
    }

    const handleButtonClick = () => {
        setSelectedText(listSize);
    }

    return (
        <div>
            SelectTest

            <div>
                <Select
                    defaultValue={{label: '20 개', value: '20'}}
                    // value={listSize}
                    onChange={handleChange}
                    options={[
                        {label: '10 개', value: '10'},
                        {label: '20 개', value: '20'},
                        {label: '30 개', value: '30'},
                    ]}
                >
                </Select>
            </div>
            <div>
                <Button onClick={handleButtonClick}>select 선택된 값</Button>
            </div>
            <div>
                <input type="text" value={selectedText}></input>
            </div>

        </div>
    );
}

export default SelectTest;
