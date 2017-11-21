import {
    CREATE_NEW_BOARD,
    CANCEL_NEW_BOARD,
} from './../Actions/ActionTypes';


const initialState = {
    isBoardOpen: false,
}

export default function(state = initialState, action) {

    switch (action.type) {

        case CREATE_NEW_BOARD:
            return {
                ...state,
                isBoardOpen: true,
            };
            break;

        case CANCEL_NEW_BOARD:
            return {
                ...state,
                isBoardOpen: false
            };
            break;


            default:
                return state;

    }

}
