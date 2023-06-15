import { useState } from "react";
import Checkbox from "./form-components/Checkbox";

function ListPgae_searchBox() {

    const dataList = [
        {label: '애플', value: 'apple'},
        {label: '구글', value: 'google'},
        {label: '네이버', value: 'naver'},
        {label: '카카오', value: 'kakao'},
    ];

    const [searchParams, setSearchParams] = useState([]);

    const onSearch = () => {
        console.log('onSearch');
        console.log('searchParams', searchParams);
    }

    return (
        <div>
            <h2>
                ListPgae_searchBox
            </h2>

            <div>
                <p>searchBox</p>

                <Checkbox options={dataList} name='snsLognType' value={['google', 'naver']} onChange={(e) => {
                    console.log('checkbox change', e);
                    setSearchParams(prev => ({
                        ...prev,
                        snsLognType: e,
                    }));
                }} />

            </div>

            <div>
                <button onClick={onSearch}>검색</button>
            </div>

        </div>
    );
}

export default ListPgae_searchBox;
