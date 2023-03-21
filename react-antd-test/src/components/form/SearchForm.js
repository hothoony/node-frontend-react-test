import { Button, DatePicker, Select } from "antd";
import Search from "antd/es/input/Search";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const lpad2 = (str) => {
    let s = String(str);
    while (s.length < 2) {
        s = '0' + s;
    }
    return s;
}

const formatDate = (date) => {
    const yyyy = date.getFullYear();;
    const mm = lpad2(date.getMonth() + 1);
    const dd = lpad2(date.getDate());
    return `${yyyy}-${mm}-${dd}`;
}

const SearchForm = () => {

    const [listSize, setListSize] = useState('25'); // 데이터가 string 이기 때문에 string 으로 셋팅해야 함
    const [keyword, setKeyword] = useState('');
    const [keywordType, setKeywordType] = useState('name');
    const [openYn, setOpenYn] = useState('');

    const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');
    // const [endDate, setEndDate] = useState('2023-03-21');
    const [endDate, setEndDate] = useState(formatDate(new Date()));

    useEffect(() => {
        doSearch();
        return () => {}
    }, [listSize, openYn]);
    
    const onSelectChange = (e) => {
        // console.log('onSelectChange', e);
        setListSize(e);
    }

    const onSearchChange = (e) => {
        // console.log('onSearchChange', e);
        setKeyword(e.target.value);
    }

    const onOpenFlChange = (e) => {
        // console.log('onOpenFlChange', e);
        setOpenYn(e);
    }

    const onKeywordTypeChange = (e) => {
        // console.log('onKeywordTypeChange');
        setKeywordType(e);
    }

    const onSearchButtonClick = () => {
        doSearch();
    }

    const onStartDateChange = (e) => {
        console.log('onStartDateChange', e);
        console.log('e.$d', e.$d);
        console.log('formatDate(e.$d)', formatDate(e.$d));
        setStartDate(formatDate(e.$d));
        // setStartDate('2023-03-01');
    }

    const onEndDateChange = (e) => {
        console.log('onEndDateChange', e);
        setEndDate(formatDate(e.$d));
    }

    const doSearch = (e) => {
        const params = {
            listSize,
            openYn,
            startDate,
            endDate,
            keywordType,
            keyword,
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
                    placeholder="시작일"
                    // value={startDate}
                    onChange={onStartDateChange}
                />
                ~
                <DatePicker
                    placeholder="종료일"
                    defaultValue={dayjs(endDate, 'YYYY-MM-DD')}
                    // defaultValue={dayjs(formatDate(new Date()), 'YYYY-MM-DD')}
                    // value={endDate}
                    onChange={onEndDateChange}
                />
            </div>

            <div>
                <Select
                    style={{ width : 80 }}
                    value={keywordType}
                    options={[
                        {value: 'name', label: '이름'},
                        {value: 'email', label: '이메일'},
                        {value: 'mobile', label: '핸드폰'},
                    ]}
                    onChange={onKeywordTypeChange}
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
