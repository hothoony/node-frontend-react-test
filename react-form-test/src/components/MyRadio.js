import { useState } from "react";

function MyRadio() {

    const dataList = [
        {label: '애플', value: 'apple'},
        {label: '구글', value: 'google'},
        {label: '네이버', value: 'naver'},
        {label: '카카오', value: 'kakao'},
    ];

    const [searchForm, setSearchForm] = useState({});

    const doSearch = () => {
        console.log('doSearch');
        console.log('searchForm', searchForm);
    }

    return (
        <div>
            <h2>MyRadio</h2>

            <div>
                {dataList && dataList.map((item, idx) => {
                    return (
                        <label key={idx}>
                            <input
                                type="radio"
                                name="snsLoginType"
                                value={item.value}
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
                <button onClick={() => doSearch()}>검색</button>
            </div>

        </div>
    );
}

export default MyRadio;
