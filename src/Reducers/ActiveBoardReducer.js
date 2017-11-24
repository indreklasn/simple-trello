import {
    SELECT_ACTIVE_BOARD,
    SELECT_ACTIVE_BOARD_SUCCESS
} from './../Actions/ActionTypes';


const initialState = {
    title: null,
    id: null,
    isFetching: false
}

export default function(state = initialState, action) {

    switch (action.type) {

        case SELECT_ACTIVE_BOARD:
            return {
                ...state,
                title: action.payload.title,
                id:  action.payload.id,
                isFetching: true
            }

            case SELECT_ACTIVE_BOARD_SUCCESS:
                return {
                    ...state,
                    isFetching: false
                }

        default:
            return {...state};

    }
}
