import { useEffect, useState } from "react";

function MyRadio_defaultValue() {

    const dataList = [
        {label: '애플', value: 'apple'},
        {label: '구글', value: 'google'},
        {label: '네이버', value: 'naver'},
        {label: '카카오', value: 'kakao'},
    ];
    
    const [defaultValue, setDefaultValue] = useState('');
    const [searchTxt, setSearchTxt] = useState('apple');
    const [searchForm, setSearchForm] = useState({});

    const changeDefaultValue = (e) => {
        console.log('changeDefaultValue');
        console.log('searchTxt', searchTxt);
        setDefaultValue(searchTxt);
    }

    // 처음만 렌더링
    useEffect(() => {
        setDefaultValue('google');
    }, []);

    return (
        <div>
            <h2>
                MyRadio_defaultValue
            </h2>

            <div>
                {dataList && dataList.map((item, idx) => {
                    return (
                        <label key={idx}>
                            <input
                                type="radio"
                                name="snsLoginType"
                                value={item.value}
                                checked={item.value === defaultValue}
                                onChange={e => {
                                    setSearchForm((prev) => ({
                                        ...prev,
                                        snsLoginType: e.target.value,
                                    }))
                                }}
                            />
                            <span>{item.label}</span>
                        </label>
                    );
                })}
            </div>

            <div>
                <input type="text" value={searchTxt} onChange={e => setSearchTxt(e.target.value)}/>
                <button onClick={e => changeDefaultValue(e)}>초기 값 변경</button>
            </div>
        </div>
    );
}

export default MyRadio_defaultValue;
