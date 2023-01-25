import { createStore } from "redux";
import rootReducer from '../reducers/rootReducer.js';

// rootReducer 로 store 를 생성한다
// store 에는 하나의 reducer 만 등록 가능
const store = createStore(rootReducer);
console.log('store', store);
console.log('store.getState()', store.getState());

export default store;
