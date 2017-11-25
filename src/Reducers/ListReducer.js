import {
    SUBMIT_LIST,
    SUBMIT_LIST_SUCCESS,
    SUBMIT_NEW_CARD
} from './../Actions/ActionTypes';

const initialState = []

export default function(state = initialState, action) {
    switch (action.type) {

        case SUBMIT_LIST:
            return [...state, action.payload];

        case SUBMIT_LIST_SUCCESS:
            return [...state];

        case SUBMIT_NEW_CARD:
            return [...state, action.payload];

        default:
            return state;
    }
}
