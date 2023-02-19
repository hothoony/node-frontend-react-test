
## recoil 데이터 정의

- ### atom
```javascript
export const datetimeState = atom({
    key: 'datetimeState', // 키 값
    default: (new Date()).getTime(), // 초기 값
});
```

- ### selector
```javascript
export const datetimeStrState = selector({
    key: 'dateTimeStrState', // 키 값
    get: ({get}) => { // getter 함수 정의
        const datetime = get(datetimeState);
        const date = new Date(datetime);

        const yyyy = lzp2(date.getFullYear());
        const mm   = lzp2(date.getMonth() + 1);
        const dd   = lzp2(date.getDate());
        const hh = lzp2(date.getHours());
        const mi = lzp2(date.getMinutes());
        const ss = lzp2(date.getSeconds());

        return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mi + ':' + ss;
    },
    set: ({set}, newValue) => { // setter 함수 정의
        const date = new Date(newValue);
        set(datetimeState, date.getTime());
    },
});
```

## `atomDateTime.js`
```javascript
// src/components/datetime/atomDateTime.js

import { atom, selector } from "recoil";

export const datetimeState = atom({
    key: 'datetimeState',
    default: (new Date()).getTime(),
});

export const dateState = selector({
    key: 'dateState',
    get: ({get}) => {
        const datetime = get(datetimeState);
        const date = new Date(datetime);
        
        const yyyy = lzp2(date.getFullYear());
        const mm   = lzp2(date.getMonth() + 1);
        const dd   = lzp2(date.getDate());

        return yyyy + '-' + mm + '-' + dd;
    },
});

export const timeState = selector({
    key: 'timeState',
    get: ({get}) => {
        const datetime = get(datetimeState);
        const date = new Date(datetime);

        const hh = lzp2(date.getHours());
        const mi = lzp2(date.getMinutes());
        const ss = lzp2(date.getSeconds());

        return hh + ':' + mi + ':' + ss;
    },
});

export const datetimeStrState = selector({
    key: 'dateTimeStrState',
    get: ({get}) => {
        const datetime = get(datetimeState);
        const date = new Date(datetime);

        const yyyy = lzp2(date.getFullYear());
        const mm   = lzp2(date.getMonth() + 1);
        const dd   = lzp2(date.getDate());
        const hh = lzp2(date.getHours());
        const mi = lzp2(date.getMinutes());
        const ss = lzp2(date.getSeconds());

        return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mi + ':' + ss;
    },
    set: ({set}, newValue) => {
        const date = new Date(newValue);
        set(datetimeState, date.getTime());
    },
});

const lzp2 = (num) => {
    let str = String(num);
    while (str.length < 2) {
        str = '0' + str;
    }
    return str;
}
```

## `DateTimeView.js`
```javascript
// src/components/datetime/DateTimeView.js

import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { datetimeState, dateState, timeState, datetimeStrState } from "./atomDateTime";

const DateTimeView = () => {

    const [datetime, setDateTime] = useRecoilState(datetimeState);
    const yyyymmdd = useRecoilValue(dateState);
    const hhmiss = useRecoilValue(timeState);
    const [datetimeStr, setDatetimeStr] = useRecoilState(datetimeStrState);

    const changeDateTimeState = () => {
        // datetimeState 를 직접 변경한다
        setDateTime(1676807314000);
    }

    const changeDateTimeStr = () => {
        // datetimeStrState selector 의 set 을 이용해서
        // '2023-02-19 12:34:56' 를 파라미터로 입력받고
        // datetimeState 를 변경한다
        setDatetimeStr('2023-02-19 12:34:56');
    }

    return (
        <div>
            <h2>DateTimeView</h2>
            <div>
                <ul>
                    <li>datetime = {datetime}</li>
                    <li>yyyymmdd = {yyyymmdd}</li>
                    <li>hhmiss = {hhmiss}</li>
                    <li>datetimeStr = {datetimeStr}</li>
                </ul>
            </div>
            <div>
                <button onClick={changeDateTimeState}>change datetimeState</button>
            </div>
            <div>
                <button onClick={changeDateTimeStr}>change datetimeStr</button>
            </div>
        </div>
    );
}

export default DateTimeView;
```
