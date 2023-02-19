import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { datetimeState, dateState, timeState, datetimeStrState } from "./atomDateTime";

const DateTimeView = () => {

    const [datetime, setDateTime] = useRecoilState(datetimeState);
    const yyyymmdd = useRecoilValue(dateState);
    const hhmiss = useRecoilValue(timeState);
    const [datetimeStr, setDatetimeStr] = useRecoilState(datetimeStrState);

    const changeDateTimeState = () => {
        setDateTime(1676807314000);
    }

    const changeDateTimeStr = () => {
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
                <button onClick={changeDateTimeStr}>change datetimeStr</button>
            </div>
        </div>
    );
}

export default DateTimeView;
