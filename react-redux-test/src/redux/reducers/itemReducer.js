import { ITEM_ADD, ITEM_DEL } from '../actions/itemAction';

const initialState = [];

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_ADD:
            return {
                ...state
            };
        case ITEM_DEL:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default itemReducer;
