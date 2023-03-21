import { Button, DatePicker, Select } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";

const SearchForm = () => {

    const [listSize, setListSize] = useState('25'); // 데이터가 string 이기 때문에 string 으로 셋팅해야 함
    const [keyword, setKeyword] = useState('');
    const [searchOption, setSearchOption] = useState('name');
    const [openYn, setOpenYn] = useState('');

    useEffect(() => {
        doSearch();
    }, [listSize, openYn]);
    
    const onSelectChange = (e) => {
        console.log('onSelectChange', e);
        setListSize(e);
    }

    const onSearchChange = (e) => {
        // console.log('onSearchChange', e);
        setKeyword(e.target.value);
    }

    const onOpenFlChange = (e) => {
        console.log('onOpenFlChange', e);
        setOpenYn(e);
    }

    const onSearchOptionChange = (e) => {
        console.log('onSearchOptionChange');
        setSearchOption(e);
    }

    const onSearchButtonClick = () => {
        doSearch();
    }

    const doSearch = (e) => {
        const params = {
            listSize,
            searchOption,
            keyword,
            openYn,
        };
        console.log('doSearch params', params);
    }

    return (
        <>
            <div>
                SearchForm
            </div>
            <div>

                <Select
                    style={{ width : 80 }}
                    onChange={onSelectChange}
                    // defaultValue={{value: '25', label: '25 개'}}
                    value={listSize}
                    options={[
                        {value: '10', label: '10 개'},
                        {value: '25', label: '25 개'},
                        {value: '50', label: '50 개'},
                    ]}
                />

                <Select
                    style={{ width : 100 }}
                    placeholder="공개 여부"
                    value={openYn}
                    options={[
                        {value: '', label: '전체'},
                        {value: 'Y', label: '공개'},
                        {value: 'N', label: '비공개'},
                    ]}
                    onChange={onOpenFlChange}
                />

            </div>

            <div>
                <DatePicker
                    // value={'2023-03-03'}
                />
            </div>

            <div>
                <Select
                    style={{ width : 80 }}
                    value={searchOption}
                    options={[
                        {value: 'name', label: '이름'},
                        {value: 'email', label: '이메일'},
                        {value: 'mobile', label: '핸드폰'},
                    ]}
                    onChange={onSearchOptionChange}
                />

                <Search
                    style={{ width : 200 }}
                    // allowClear
                    placeholder="검색어를 입력하세요"
                    size="large"
                    value={keyword}
                    onSearch={doSearch}
                    onChange={onSearchChange}
                />

                <Button type="primary" onClick={onSearchButtonClick}>검색</Button>
            </div>
        </>
    );
}

export default SearchForm;
