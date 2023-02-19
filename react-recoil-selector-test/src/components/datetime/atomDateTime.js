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
