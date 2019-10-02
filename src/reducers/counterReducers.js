import {ACTION_INCREMENT, ACTION_DECREMENT} from "../actions/actionTypes";

const counterReducers = (number = 0, action) => {
    switch (action.type) {
        case ACTION_INCREMENT:
            return ++number;
        case ACTION_DECREMENT:
            return --number;
        default:
            return 0;
    }
}

export default counterReducers;