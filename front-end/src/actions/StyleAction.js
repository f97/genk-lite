import * as types from '../constants/ActionTypes';

export function changeColor(color) {
    return {
        type: types.CHANGE_COLOR,
        color
    };
}

export function changeSize(number) {
    return {
        type: types.CHANGE_COLOR,
        number
    };
}