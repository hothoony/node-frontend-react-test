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
