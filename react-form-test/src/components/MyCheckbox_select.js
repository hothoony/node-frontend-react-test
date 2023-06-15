import { useState } from "react";

function MyCheckbox_select() {

    const dataList = [
        {label: '애플', value: 'apple'},
        {label: '구글', value: 'google'},
        {label: '네이버', value: 'naver'},
        {label: '카카오', value: 'kakao'},
    ];

    const [checkedValues, setCheckedValues] = useState([]);

    const showCheckedValues = () => {
        console.log('doSearch');
        console.log('searchForm', checkedValues);
    }

    return (
        <div>
            <h2>
                MyCheckbox_select
            </h2>

            <div>
                {dataList && dataList.map((item, idx) => {
                    return (
                        <label key={idx}>
                            <input
                                type="checkbox"
                                name="snsLoginType"
                                value={item.value}
                                onChange={e => {
                                    setCheckedValues((prev) => ([
                                        ...prev,
                                        e.target.value,
                                    ]))
                                }}
                            />
                            <span>{item.label}</span>
                        </label>
                    );
                })}
            </div>

            <div>
                <button onClick={() => showCheckedValues()}>선택한 값 확인</button>
            </div>
        </div>
    );
}

export default MyCheckbox_select;
