import { combineReducers } from "redux";
import { countReducer } from "./countReducer";

// 여러 개의 reducer 를 하나의 reducer 로 합쳐서 store 로 만든다
const rootReducer = combineReducers({
    count: countReducer,
});

export default rootReducer;
