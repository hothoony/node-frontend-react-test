import { atom } from "recoil";

const loginState = atom({
    key: 'loginState',
    default: false,
});

const cookieState = atom({
    key: 'cookieState',
    default: {},
});

// export default loginState;
export { loginState, cookieState };
