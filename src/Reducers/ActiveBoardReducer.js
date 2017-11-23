import Store from './../Store';
import {
    SELECT_ACTIVE_BOARD,
} from './../Actions/ActionTypes';


const initialState = {}

export default function(state = initialState, action) {

    switch (action.type) {

        case SELECT_ACTIVE_BOARD:
            console.log(action.payload)
            return {
                ...state,
                title: action.payload.title,
                id: action.payload.id
            };

        default:
            return {...state};

    }
}
