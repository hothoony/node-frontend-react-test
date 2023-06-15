import { useEffect, useState } from "react";

function MySelect_defaultValue() {

    const dataList = [
        {label: '애플', value: 'apple'},
        {label: '구글', value: 'google'},
        {label: '네이버', value: 'naver'},
        {label: '카카오', value: 'kakao'},
    ];

    const [searchForm, setSearchForm] = useState({});
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        setSelectedValue('google');
    }, []);

    const doSearch = () => {
        console.log('doSearch');
        console.log('selectedValue',selectedValue);
        console.log('searchForm', searchForm);
    }

    const onChangeSelect = (e) => {
        console.log('e', e.target.value);
        setSelectedValue(e.target.value);
        setSearchForm((prev) => ({
            ...prev,
            snsLoginType: e.target.value
        }));
    }

    return (
        <div>
            <h2>
                MySelect_defaultValue
            </h2>

            <div>
                <select name='snsLoginType' onChange={onChangeSelect} value={selectedValue}>
                {dataList && dataList.map((item, idx) => {
                    return (
                        <option key={idx} value={item.value}>
                            {item.label}
                        </option>
                    );
                })}
                </select>
            </div>

            <div>
                <button onClick={() => doSearch()}>검색</button>
            </div>
        </div>
    );
}

export default MySelect_defaultValue;
