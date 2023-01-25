import { LOG_IN, LOG_OUT } from "../actions/loginOutAction";

const initialState = {
    isLogin: false,
    username: '',
    password: '',
};

const loginOutReducer = (state = initialState, action) => {
    console.log('');
    console.log('loginOutReducer');
    console.log('state', state);
    console.log('action', action);

    console.log('return1', {
        ...state,
        isLogin: action.isLogin,
        username: action.username,
        password: action.password,
    });
    console.log('return2', Object.assign(state, {
        isLogin: action.isLogin,
        username: action.username,
        password: action.password,
    }));
    console.log('return3', Object.assign(state, action));

    switch (action.type) {
        case LOG_IN:
            console.log('switch case LOG_IN');
            return Object.assign(state, {
                isLogin: action.isLogin,
                username: action.username,
                password: action.password,
            });
        case LOG_OUT:
            console.log('switch case LOG_OUT');
            return {
                ...state,
                isLogin: action.isLogin,
            };
        default:
            console.log('switch default');
            return state;
    }
}

export default loginOutReducer;
