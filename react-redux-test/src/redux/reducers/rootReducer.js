import { combineReducers } from "redux";
import loginOutReducer from './loginOutReducer';
import itemReducer from './itemReducer';

// 여러 개의 reducer 를 하나로 합친다
const rootReducer = combineReducers({
    loginInfo: loginOutReducer,
    items: itemReducer,
});

export default rootReducer;
