import {
    RECEIVE_NEW_BOARD,
} from './../Actions/ActionTypes';

const initialState = {
    title: null,
    id: null,
}

export default function(state = initialState, action) {

    switch (action.type) {
        case RECEIVE_NEW_BOARD:
            return [...state, action.payload];

        default:
            return state;
    }

    return state;
}
