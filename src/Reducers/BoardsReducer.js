import {
    RECEIVE_NEW_BOARD,
    STORE_NEW_BOARD,
} from './../Actions/ActionTypes';

const initialState = [];

export default function(state = initialState, action) {

    switch (action.type) {

        case RECEIVE_NEW_BOARD:
            return [...state, action.payload];

        case STORE_NEW_BOARD:

            let boardsCollection = [...state];
            localStorage.setItem('boardCollection', JSON.stringify(boardsCollection));
            return boardsCollection;

        default:
            return state;

    }
}
