import {ACTION_INCREMENT, ACTION_DECREMENT} from "./actionTypes";

export const increaseAction = (step) => {
    return {
        type: ACTION_INCREMENT,
        step:step
    }
}

export const decreaseAction = (step) => {
    return {
        type: ACTION_DECREMENT,
        step:step
    }
}