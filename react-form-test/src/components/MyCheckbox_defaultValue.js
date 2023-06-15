import { useEffect, useState } from "react";

function MyCheckbox_defaultValue() {

    const dataList = [
        {label: '애플', value: 'apple'},
        {label: '구글', value: 'google'},
        {label: '네이버', value: 'naver'},
        {label: '카카오', value: 'kakao'},
    ];

    const [checkedValues, setCheckedValues] = useState([]);
    // const [defaultValues, setDefaultValues] = useState([]);
    const [searchTxt, setSearchTxt] = useState('apple, kakao');

    useEffect(() => {
        setCheckedValues(['google', 'naver']);
    }, []);

    const showCheckedValues = () => {
        console.log('doSearch');
        console.log('searchForm', checkedValues);
    }

    const onChangeCheckbox = (e) => {
        console.log('onChangeCheckbox');
        console.log(e.target.value, e.target.checked);

        if (e.target.checked) {
            setCheckedValues((prev) => ([
                ...prev,
                e.target.value,
            ]));
        } else {
            setCheckedValues(checkedValues.filter(item => item !== e.target.value));
        }
    }

    const changeDefaultValues = (e) => {
        console.log('searchTxt', searchTxt);
        const ary = searchTxt.split(',').map(o => o.trim());
        console.log('ary', ary);
        setCheckedValues(ary);
    }

    return (
        <div>
            <h2>
                MyCheckbox_defaultValue
            </h2>

            <div>
                {dataList && dataList.map((item, idx) => {
                    return (
                        <label key={idx}>
                            <input
                                type="checkbox"
                                name="snsLoginType"
                                value={item.value}
                                checked={checkedValues.includes(item.value)}
                                onChange={onChangeCheckbox}
                            />
                            <span>{item.label}</span>
                        </label>
                    );
                })}
            </div>

            <div>
                <input type="text" value={searchTxt} onChange={e => setSearchTxt(e.target.value)}/>
                <button onClick={changeDefaultValues}>초기 값 변경</button>
            </div>
        </div>
    );
}

export default MyCheckbox_defaultValue;
