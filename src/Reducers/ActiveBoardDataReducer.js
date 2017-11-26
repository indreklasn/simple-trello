import {
    SUBMIT_LIST,
    SUBMIT_LIST_SUCCESS,
    SUBMIT_NEW_CARD,
} from './../Actions/ActionTypes';

const initialState = {
    listItems: [],
    cardItems: [],
}

export default function(state = initialState, action) {
    switch (action.type) {

        case SUBMIT_LIST:
            return {
                ...state,
                listItems: state.listItems.concat(action.payload)
            };

        case SUBMIT_NEW_CARD:
            return {
                ...state,
                cardItems: state.cardItems.concat(action.payload)
            }

        default:
            return state;
    }
}
