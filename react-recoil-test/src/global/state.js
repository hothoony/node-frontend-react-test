import { atom } from "recoil";

const loginState = atom({
    key: 'loginState',
    default: 0,
});

const cookieState = atom({
    key: 'cookieState',
    default: {},
});

// export default loginState;
export { loginState, cookieState };
