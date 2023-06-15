import { useState } from "react";
import Checkbox from "./form-components/Checkbox";
import Radio from "./form-components/Radio";
import Select from "./form-components/Select";

function ModifyPage() {

    const dataList = [
        {label: '애플', value: 'apple'},
        {label: '구글', value: 'google'},
        {label: '네이버', value: 'naver'},
        {label: '카카오', value: 'kakao'},
    ];

    const dataList2 = [
        {label: '맥', value: 'mac'},
        {label: '윈도우', value: 'windows'},
        {label: '리눅스', value: 'linux'},
    ];

    const dataList3 = [
        {label: '인텔리제이', value: 'intellij'},
        {label: '브이에스코드', value: 'vscode'},
        {label: '이클립스', value: 'eclipse'},
        {label: '노트패드', value: 'notepad'},
    ];

    const [searchParams, setSearchParams] = useState([]);

    const onSearch = () => {
        console.log('onSearch');
        console.log('searchParams', searchParams);
    }

    return (
        <div>
            <h2>
                ModifyPage
            </h2>

            <div>
                <p>searchBox</p>

                <Checkbox options={dataList} name='snsLognType' value={['google', 'naver']} 
                    onChange={(e) => {
                        setSearchParams(prev => ({
                            ...prev,
                            snsLognType: e,
                        }));
                    }}
                />

                <Radio name='osType' options={dataList2} 
                    onChange={(e) => {
                        setSearchParams(prev => ({
                            ...prev,
                            osType: e,
                        }))
                    }}
                />

                <Select options={dataList3}
                    onChange={(e) => {
                        setSearchParams(prev => ({
                            ...prev,
                            editor: e,
                        }))
                    }}
                />

            </div>

            <div>
                <button onClick={onSearch}>검색</button>
            </div>

        </div>
    );
}

export default ModifyPage;
