import { COUNT_UP, COUNT_DOWN, COUNT_RESET } from "../actions/countAction";

// 초기 state
const initialState = {
    count: 0,
};

export const countReducer = (state = initialState, action) => {
    console.log('');
    console.log('countReducer');
    console.log('state', state);
    console.log('action', action);

    let step;

    switch (action.type) {
        case COUNT_UP:
            step = (action.step) ?? 1;
            return {
                ...state,
                count: state.count + step,
            }
        case COUNT_DOWN:
            step = (action.step) ?? -1;
            return {
                ...state,
                count: state.count + step,
            }
        case COUNT_RESET:
            return {
                ...state,
                count: 0,
            }
        default:
            return state;
    }
}
